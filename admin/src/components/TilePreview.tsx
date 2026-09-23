import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { CardVisualType, TileConfig } from '../types';

/**
 * A faithful copy of the blog's BlogCard tile, minus the motion wrapper.
 * It exists so an editor can see whether the artwork actually lands before
 * publishing — a tile without a photograph is a choice here, never a surprise.
 */
const BACKDROP_TYPES: CardVisualType[] = ['quote-minimal', 'graphic-bold', 'clean-editorial'];

export const TilePreview: React.FC<{
  visualType: CardVisualType;
  tileConfig: TileConfig;
  title: string;
  /** The article photograph; the typographic tiles use it as their backdrop. */
  heroImage?: string;
}> = ({ visualType, tileConfig, title, heroImage }) => {
  const backdrop = heroImage && BACKDROP_TYPES.includes(visualType) ? heroImage : undefined;

  return (
  <div className="w-full max-w-[280px]">
    <div
      className="relative flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-xs p-6 text-center shadow-xs"
      style={{ backgroundColor: tileConfig.bgColor, color: backdrop ? '#ffffff' : tileConfig.textColor }}
    >
      {backdrop && (
        <>
          <img
            src={backdrop}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/25" />
        </>
      )}

      {visualType === 'destination-split' && (
        <div className="flex h-full w-full flex-col items-center justify-between py-1">
          <span className="pb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[#4a4a4a]">
            {tileConfig.topLabel || 'customer story'}
          </span>
          <div className="flex h-[74%] w-[78%] flex-col items-center justify-between overflow-hidden rounded-xs border border-[#eae2da] bg-white p-2 shadow-md">
            {tileConfig.mockupImage ? (
              <div className="relative h-full w-full overflow-hidden rounded-xs">
                <img
                  src={tileConfig.mockupImage}
                  alt={title}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-2.5">
                  <span className="font-serif-display text-xs font-medium tracking-wide text-white">
                    {tileConfig.headlineText}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-[#faf7f4] p-3 text-center">
                <span className="font-editorial text-lg italic text-[#222]">
                  {tileConfig.headlineText}
                </span>
              </div>
            )}
          </div>
          <div className="h-1" />
        </div>
      )}

      {visualType === 'quote-minimal' && (
        <div className="relative flex h-full w-full flex-col items-center justify-center px-4 py-3">
          <p className="max-w-[240px] text-center text-sm font-normal leading-relaxed">
            {tileConfig.headlineText}
          </p>
          {tileConfig.buttonText ? (
            <div className="mt-5">
              <span className="inline-block rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#222]">
                {tileConfig.buttonText}
              </span>
            </div>
          ) : (
            <div className="mt-4 h-[1.5px] w-6 bg-current opacity-30" />
          )}
        </div>
      )}

      {visualType === 'graphic-bold' && (
        <div className="relative flex h-full w-full flex-col items-center justify-center px-5 py-4 text-center">
          {tileConfig.topLabel && (
            <span className="mb-3 font-editorial text-base italic text-[#d8d8d8]">
              {tileConfig.topLabel}
            </span>
          )}
          <p className="max-w-[220px] text-[14px] font-medium leading-relaxed text-white/95">
            {tileConfig.headlineText}
          </p>
          <div className="mt-4 h-[1px] w-8 bg-white/20" />
        </div>
      )}

      {visualType === 'laptop-mockup' && (
        <div className="relative flex h-full w-full flex-col items-center justify-between p-2">
          {tileConfig.badgeText && (
            <div className="absolute left-2.5 top-2.5 z-10">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1c1c1c] text-[9px] font-bold tracking-wider text-white shadow-xs">
                {tileConfig.badgeText}
              </span>
            </div>
          )}
          <div className="px-9 pt-2 text-center">
            <h3 className="font-serif-display text-xl font-normal tracking-wide">
              {tileConfig.headlineText}
            </h3>
            {tileConfig.scriptSubtitle && (
              <p className="mt-0.5 text-[10px] uppercase tracking-wider opacity-85">
                {tileConfig.scriptSubtitle}
              </p>
            )}
          </div>
          <div className="w-[88%] max-w-[220px] pb-1">
            <div className="rounded-t-md border border-[#3b3b3b] bg-[#242424] p-1.5 shadow-lg">
              <div className="mx-auto mb-1 h-1 w-1 rounded-full bg-black/60" />
              <div className="relative aspect-[16/10] overflow-hidden rounded-xs bg-white">
                {tileConfig.mockupImage ? (
                  <img
                    src={tileConfig.mockupImage}
                    alt={tileConfig.headlineText}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-sand-100 text-[9px] uppercase tracking-widest text-ink-500">
                    no image
                  </div>
                )}
              </div>
            </div>
            <div className="relative mx-auto h-1.5 w-[98%] rounded-b-md bg-[#d6d6d6] shadow-xs">
              <div className="mx-auto h-0.5 w-10 rounded-full bg-[#999]" />
            </div>
          </div>
        </div>
      )}

      {visualType === 'clean-editorial' && (
        <div className="relative flex h-full w-full flex-col items-center justify-center px-5 py-4 text-center">
          <p className="max-w-[230px] text-sm font-medium leading-relaxed text-white">
            {tileConfig.headlineText}
          </p>
          <div className="mt-4 flex items-center gap-1 text-[11px] uppercase tracking-wider text-white/80">
            <span>Read article</span>
            <ArrowUpRight className="h-3 w-3" />
          </div>
        </div>
      )}
    </div>

    <h2 className="mt-3.5 px-1 text-center text-[14px] font-normal leading-snug text-[#222222]">
      {title || 'Untitled article'}
    </h2>
  </div>
  );
};
