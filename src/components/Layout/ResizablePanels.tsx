import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FC,
  type ReactNode,
} from 'react';

import { libraryActions } from '../../store/slices/library';
import { useAppDispatch, useAppSelector } from '../../store/store';

const LIBRARY_COLLAPSED_WIDTH = 72;
const LIBRARY_MIN_WIDTH = 280;
const LIBRARY_MAX_WIDTH = 420;
const LIBRARY_DEFAULT_WIDTH = 280;
const LIBRARY_COLLAPSE_THRESHOLD = 200;

const RIGHT_MIN_WIDTH = 280;
const RIGHT_MAX_WIDTH = 420;
const RIGHT_DEFAULT_WIDTH = 350;

const CENTER_MIN_WIDTH = 400;
const PANEL_GAP = 12;

type ResizeSide = 'left' | 'right';

interface ResizablePanelsProps {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
  showRight: boolean;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export const ResizablePanels: FC<ResizablePanelsProps> = ({ left, center, right, showRight }) => {
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector((state) => state.library.collapsed);
  const containerRef = useRef<HTMLDivElement>(null);

  const [libraryWidth, setLibraryWidth] = useState(LIBRARY_DEFAULT_WIDTH);
  const [rightWidth, setRightWidth] = useState(RIGHT_DEFAULT_WIDTH);
  const [dragging, setDragging] = useState<ResizeSide | null>(null);

  const libraryWidthRef = useRef(libraryWidth);
  const rightWidthRef = useRef(rightWidth);
  const collapsedRef = useRef(collapsed);
  const showRightRef = useRef(showRight);
  const draggingRef = useRef(dragging);

  libraryWidthRef.current = libraryWidth;
  rightWidthRef.current = rightWidth;
  collapsedRef.current = collapsed;
  showRightRef.current = showRight;
  draggingRef.current = dragging;

  const fitPanels = useCallback(() => {
    if (draggingRef.current) return;

    const available = containerRef.current?.clientWidth ?? window.innerWidth;
    const isCollapsed = collapsedRef.current;
    const isRightVisible = showRightRef.current;
    const currentLibraryWidth = libraryWidthRef.current;
    const currentRightWidth = rightWidthRef.current;
    const rightSpace = isRightVisible ? currentRightWidth + PANEL_GAP : 0;

    if (!isCollapsed) {
      const maxLibrary = Math.min(
        LIBRARY_MAX_WIDTH,
        available - CENTER_MIN_WIDTH - rightSpace - PANEL_GAP
      );
      if (maxLibrary < LIBRARY_MIN_WIDTH) {
        dispatch(libraryActions.collapseLibrary());
      } else {
        setLibraryWidth(clamp(currentLibraryWidth, LIBRARY_MIN_WIDTH, maxLibrary));
      }
    }

    if (isRightVisible) {
      const currentLeft = isCollapsed ? LIBRARY_COLLAPSED_WIDTH : currentLibraryWidth;
      const maxRight = Math.min(
        RIGHT_MAX_WIDTH,
        Math.max(
          RIGHT_MIN_WIDTH,
          available - CENTER_MIN_WIDTH - currentLeft - PANEL_GAP * 2
        )
      );
      setRightWidth(clamp(currentRightWidth, RIGHT_MIN_WIDTH, maxRight));
    }
  }, [dispatch]);

  useEffect(() => {
    fitPanels();
  }, [collapsed, fitPanels, showRight]);

  useEffect(() => {
    window.addEventListener('resize', fitPanels);
    return () => window.removeEventListener('resize', fitPanels);
  }, [fitPanels]);

  useEffect(() => {
    if (!dragging) return;

    const previousCursor = document.body.style.cursor;
    const previousUserSelect = document.body.style.userSelect;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    const onPointerMove = (event: PointerEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const bounds = container.getBoundingClientRect();
      const available = bounds.width;
      const isCollapsed = collapsedRef.current;
      const isRightVisible = showRightRef.current;
      const currentLibraryWidth = libraryWidthRef.current;
      const currentRightWidth = rightWidthRef.current;

      if (dragging === 'left') {
        const rawWidth = event.clientX - bounds.left;
        const rightSpace = isRightVisible ? currentRightWidth + PANEL_GAP : 0;
        const maxLibrary = Math.min(
          LIBRARY_MAX_WIDTH,
          available - CENTER_MIN_WIDTH - rightSpace - PANEL_GAP
        );

        if (isCollapsed) {
          if (rawWidth >= LIBRARY_MIN_WIDTH && maxLibrary >= LIBRARY_MIN_WIDTH) {
            setLibraryWidth(clamp(rawWidth, LIBRARY_MIN_WIDTH, maxLibrary));
            dispatch(libraryActions.expandLibrary());
          }
          return;
        }

        if (rawWidth <= LIBRARY_COLLAPSE_THRESHOLD) {
          dispatch(libraryActions.collapseLibrary());
          return;
        }

        if (maxLibrary >= LIBRARY_MIN_WIDTH) {
          setLibraryWidth(clamp(rawWidth, LIBRARY_MIN_WIDTH, maxLibrary));
        }
        return;
      }

      const rawWidth = bounds.right - event.clientX;
      const leftSpace = isCollapsed ? LIBRARY_COLLAPSED_WIDTH : currentLibraryWidth;
      const maxRight = Math.min(
        RIGHT_MAX_WIDTH,
        Math.max(
          RIGHT_MIN_WIDTH,
          available - CENTER_MIN_WIDTH - leftSpace - PANEL_GAP * 2
        )
      );
      setRightWidth(clamp(rawWidth, RIGHT_MIN_WIDTH, maxRight));
    };

    const onPointerUp = () => setDragging(null);

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      document.body.style.cursor = previousCursor;
      document.body.style.userSelect = previousUserSelect;
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [dispatch, dragging]);

  const leftPanelWidth = collapsed ? LIBRARY_COLLAPSED_WIDTH : libraryWidth;

  return (
    <div
      ref={containerRef}
      className={`main-panels${dragging ? ' main-panels--dragging' : ''}`}
      style={
        {
          '--library-width': `${leftPanelWidth}px`,
          '--right-width': `${rightWidth}px`,
        } as CSSProperties
      }
    >
      <aside className='main-panels__left'>{left}</aside>

      <button
        type='button'
        aria-label='Resize library'
        className={`main-panels__resizer main-panels__resizer--left${
          dragging === 'left' ? ' main-panels__resizer--active' : ''
        }`}
        onPointerDown={(event) => {
          event.preventDefault();
          setDragging('left');
        }}
      />

      <div className='main-panels__center'>{center}</div>

      {showRight ? (
        <>
          <button
            type='button'
            aria-label='Resize now playing'
            className={`main-panels__resizer main-panels__resizer--right${
              dragging === 'right' ? ' main-panels__resizer--active' : ''
            }`}
            onPointerDown={(event) => {
              event.preventDefault();
              setDragging('right');
            }}
          />
          <aside className='main-panels__right'>{right}</aside>
        </>
      ) : null}
    </div>
  );
};
