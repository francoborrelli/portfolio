import { createPortal } from 'react-dom';
import { useEffect, useLayoutEffect, useRef, useState, type FC, type MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import type { Song } from '../../interfaces/types';
import { getSongContextActions } from '../../utils/songContextActions';

type MenuPosition = { x: number; y: number };

interface SongContextMenuProps {
  song: Song;
  position: MenuPosition;
  onClose: () => void;
  onPlay: () => void;
}

const MENU_PADDING = 8;

export const SongContextMenu: FC<SongContextMenuProps> = ({
  song,
  position,
  onClose,
  onPlay,
}) => {
  const { t } = useTranslation(['playlist']);
  const menuRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState(position);
  const actions = getSongContextActions(song);

  useLayoutEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const { width, height } = menu.getBoundingClientRect();
    const maxX = window.innerWidth - width - MENU_PADDING;
    const maxY = window.innerHeight - height - MENU_PADDING;

    setCoords({
      x: Math.max(MENU_PADDING, Math.min(position.x, maxX)),
      y: Math.max(MENU_PADDING, Math.min(position.y, maxY)),
    });
  }, [position]);

  useEffect(() => {
    const handlePointerDown = (event: Event) => {
      if (!menuRef.current?.contains(event.target as Node)) onClose();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const handleClose = () => onClose();

    const handleContextMenuClose = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('[data-song-row]')) return;
      onClose();
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('scroll', handleClose, true);
    document.addEventListener('contextmenu', handleContextMenuClose);
    window.addEventListener('resize', handleClose);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('scroll', handleClose, true);
      document.removeEventListener('contextmenu', handleContextMenuClose);
      window.removeEventListener('resize', handleClose);
    };
  }, [onClose]);

  const handleActionClick = (event: MouseEvent, href?: string) => {
    event.preventDefault();
    event.stopPropagation();

    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      onPlay();
    }

    onClose();
  };

  return createPortal(
    <div
      ref={menuRef}
      className='song-context-menu'
      role='menu'
      style={{ top: coords.y, left: coords.x }}
      onClick={(event) => event.stopPropagation()}
      onContextMenu={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      <ul className='song-context-menu__list'>
        {actions.map((action) => (
          <li key={action.key}>
            {action.dividerBefore ? <div className='song-context-menu__divider' /> : null}
            <button
              type='button'
              role='menuitem'
              className='song-context-menu__item'
              onClick={(event) => handleActionClick(event, action.href)}
            >
              <span className='song-context-menu__icon' aria-hidden>
                {action.icon}
              </span>
              <span className='song-context-menu__label'>{t(action.labelKey)}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>,
    document.body
  );
};
