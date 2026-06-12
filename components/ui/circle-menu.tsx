'use client';

import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'; // AnimatePresence used in MenuTrigger
import React, { useCallback, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const CONSTANTS = {
  itemSize: 48,
  containerSize: 250,
  spreadRadius: 100,   // distance from center to item
  openStagger: 0.03,
  closeStagger: 0.07
};

const STYLES: Record<string, Record<string, string>> = {
  trigger: {
    container:
      'rounded-full flex items-center bg-foreground justify-center cursor-pointer outline-none ring-0 hover:brightness-125 transition-all duration-100 z-50',
    active: 'bg-foreground'
  },
  item: {
    container:
      'rounded-full flex items-center justify-center absolute bg-muted cursor-pointer nc-circle-item'
  }
};

/**
 * Fan arc: 90° (straight down) → 180° (straight left).
 * Designed for a menu trigger placed in the top-right corner of the screen.
 * Items spread into the lower-left quadrant of the viewport.
 */
const pointOnCircle = (i: number, n: number, r: number, cx = 0, cy = 0) => {
  const startRad = Math.PI / 2;   // 90° → downward
  const endRad = Math.PI;         // 180° → leftward
  const theta =
    n > 1
      ? startRad + ((endRad - startRad) * i) / (n - 1)
      : (startRad + endRad) / 2;
  return { x: cx + r * Math.cos(theta), y: cy + r * Math.sin(theta) };
};

/* ── MenuItem ──────────────────────────────────────────────────────────────── */
interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  index: number;
  totalItems: number;
  isOpen: boolean;
  onClose: () => void;
}

const MenuItem = ({
  icon,
  label,
  href,
  index,
  totalItems,
  isOpen,
  onClose
}: MenuItemProps) => {
  const { x, y } = pointOnCircle(index, totalItems, CONSTANTS.spreadRadius);

  return (
    <a href={href} onClick={onClose} className={STYLES.item.container}>
      <motion.button
        animate={{ x: isOpen ? x : 0, y: isOpen ? y : 0 }}
        whileHover={{ scale: 1.12, transition: { duration: 0.1, delay: 0 } }}
        transition={{
          delay: isOpen
            ? index * CONSTANTS.openStagger
            : index * CONSTANTS.closeStagger,
          type: 'spring',
          stiffness: 300,
          damping: 30
        }}
        style={{ height: CONSTANTS.itemSize - 2, width: CONSTANTS.itemSize - 2 }}
        className={STYLES.item.container}
      >
        {icon}
      </motion.button>
    </a>
  );
};

/* ── MenuTrigger ───────────────────────────────────────────────────────────── */
interface MenuTriggerProps {
  setIsOpen: (v: boolean) => void;
  isOpen: boolean;
  itemsLength: number;
  closeAnimationCallback: () => void;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
}

const MenuTrigger = ({
  setIsOpen,
  isOpen,
  itemsLength,
  closeAnimationCallback,
  openIcon,
  closeIcon
}: MenuTriggerProps) => {
  const animate = useAnimationControls();
  const shakeAnimation = useAnimationControls();

  const scaleTransition = Array.from({ length: itemsLength - 1 })
    .map((_, i) => i + 1)
    .reduce((acc, _, i) => {
      acc.push(1 + i * 0.15);
      return acc;
    }, [] as number[]);

  const closeAnimation = async () => {
    shakeAnimation.start({
      translateX: [0, 2, -2, 0, 2, -2, 0],
      transition: {
        duration: CONSTANTS.closeStagger,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop'
      }
    });

    for (let i = 0; i < scaleTransition.length; i++) {
      await animate.start({
        height: Math.min(
          CONSTANTS.itemSize * scaleTransition[i],
          CONSTANTS.itemSize + CONSTANTS.itemSize / 2
        ),
        width: Math.min(
          CONSTANTS.itemSize * scaleTransition[i],
          CONSTANTS.itemSize + CONSTANTS.itemSize / 2
        ),
        backgroundColor: `color-mix(in srgb, var(--foreground) ${Math.max(
          100 - i * 10,
          40
        )}%, var(--background))`,
        transition: { duration: CONSTANTS.closeStagger / 2, ease: 'linear' }
      });
      if (i !== scaleTransition.length - 1) {
        await new Promise((r) => setTimeout(r, CONSTANTS.closeStagger * 1000));
      }
    }

    shakeAnimation.stop();
    shakeAnimation.start({ translateX: 0, transition: { duration: 0 } });
    animate.start({
      height: CONSTANTS.itemSize,
      width: CONSTANTS.itemSize,
      backgroundColor: 'var(--foreground)',
      transition: { duration: 0.1, ease: 'backInOut' }
    });
  };

  return (
    <motion.div animate={shakeAnimation} className="z-50">
      <motion.button
        animate={animate}
        style={{ height: CONSTANTS.itemSize, width: CONSTANTS.itemSize }}
        className={cn(STYLES.trigger.container, isOpen && STYLES.trigger.active)}
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
            closeAnimationCallback();
            closeAnimation();
          } else {
            setIsOpen(true);
          }
        }}
      >
        <AnimatePresence mode="popLayout">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.2 }}
            >
              {closeIcon}
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.2 }}
            >
              {openIcon}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};

/* ── CircleMenu ────────────────────────────────────────────────────────────── */
export function CircleMenu({
  items,
  openIcon = <Menu size={18} className="text-background" />,
  closeIcon = <X size={18} className="text-background" />
}: {
  items: Array<{ label: string; icon: React.ReactNode; href: string }>;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const animate = useAnimationControls();

  const closeAnimationCallback = useCallback(async () => {
    await animate.start({
      rotate: -360,
      filter: 'blur(1px)',
      transition: {
        duration: CONSTANTS.closeStagger * (items.length + 2),
        ease: 'linear'
      }
    });
    await animate.start({
      rotate: 0,
      filter: 'blur(0px)',
      transition: { duration: 0 }
    });
  }, [animate, items.length]);

  /** Called when an item is clicked: close the menu with animation. */
  const handleItemClose = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
      closeAnimationCallback();
    }
  }, [isOpen, closeAnimationCallback]);

  return (
    <div
      style={{ width: CONSTANTS.containerSize, height: CONSTANTS.containerSize }}
      className="relative flex items-center justify-center place-self-center"
    >
      <MenuTrigger
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        itemsLength={items.length}
        closeAnimationCallback={closeAnimationCallback}
        openIcon={openIcon}
        closeIcon={closeIcon}
      />
      <motion.div
        animate={animate}
        className={cn('absolute inset-0 z-0 flex items-center justify-center')}
      >
        {items.map((item, index) => (
          <MenuItem
            key={`menu-item-${index}`}
            icon={item.icon}
            label={item.label}
            href={item.href}
            index={index}
            totalItems={items.length}
            isOpen={isOpen}
            onClose={handleItemClose}
          />
        ))}
      </motion.div>
    </div>
  );
}
