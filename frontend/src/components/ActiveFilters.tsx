import React from 'react';
import { CategoryType } from '../types';

interface ActiveFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: CategoryType) => void;
}

/**
 * Shows which filters are currently narrowing the grid, with a quick way to clear
 * each one. Previously lived under the blog masthead; the filter controls now sit
 * in the nav bar, so this stays with the results it describes.
 */
export const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) => {
  if (!searchQuery && selectedCategory === 'All Categories') return null;

  return (
    <div className="flex items-center gap-2 text-xs text-[#777] mb-6 flex-wrap">
      <span>Active filter:</span>
      {selectedCategory !== 'All Categories' && (
        <span className="bg-[#ede1d8] text-[#554035] px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
          {selectedCategory}
          <button
            onClick={() => onCategoryChange('All Categories')}
            className="hover:text-black ml-1 cursor-pointer"
            aria-label="Clear category filter"
          >
            ×
          </button>
        </span>
      )}
      {searchQuery && (
        <span className="bg-[#ede1d8] text-[#554035] px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
          "{searchQuery}"
          <button
            onClick={() => onSearchChange('')}
            className="hover:text-black ml-1 cursor-pointer"
            aria-label="Clear search"
          >
            ×
          </button>
        </span>
      )}
    </div>
  );
};
