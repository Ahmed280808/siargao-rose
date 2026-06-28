<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======

=======
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
import React from 'react';
<<<<<<< HEAD
import { Label } from '@/components/ui/label';
>>>>>>> bd28705 (initial commit)
=======
>>>>>>> 7a4c2f5 (bold urban redesign)
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

export default function VehicleFilter({ filters, onFilterChange }) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="bg-[#f5f5f5] border border-gray-200 p-6 space-y-7">
      <h3 className="font-condensed text-sm font-700 tracking-widest uppercase text-[#111]">Filter</h3>

      <div className="space-y-2">
        <label className="font-condensed text-xs font-600 tracking-widest uppercase text-gray-400">Sort By</label>
        <Select value={filters.sortBy} onValueChange={(v) => onFilterChange({ ...filters, sortBy: v })}>
          <SelectTrigger className="rounded-none border-gray-200 text-[#111] text-sm h-10">
            <SelectValue />
=======
    <div className="bg-card rounded-xl p-6 space-y-6 border">
      <div>
        <h3 className="font-semibold mb-4">Filters</h3>
      </div>
=======
    <div className="bg-white border border-[#e8ede8] p-8 space-y-8">
      <h3 className="text-[0.65rem] tracking-[0.2em] uppercase font-medium text-[#1a2e1a]">Refine</h3>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)

      <div className="space-y-3">
        <label className="text-[0.65rem] tracking-[0.15em] uppercase text-[#1a2e1a]/50">Sort By</label>
        <Select value={filters.sortBy} onValueChange={(value) => onFilterChange({ ...filters, sortBy: value })}>
          <SelectTrigger className="border-[#e8ede8] text-[#1a2e1a] text-sm font-light rounded-none h-10">
            <SelectValue placeholder="Select sorting" />
>>>>>>> bd28705 (initial commit)
=======
    <div className="bg-[#f5f5f5] border border-gray-200 p-6 space-y-7">
      <h3 className="font-condensed text-sm font-700 tracking-widest uppercase text-[#111]">Filter</h3>

      <div className="space-y-2">
        <label className="font-condensed text-xs font-600 tracking-widest uppercase text-gray-400">Sort By</label>
        <Select value={filters.sortBy} onValueChange={(v) => onFilterChange({ ...filters, sortBy: v })}>
          <SelectTrigger className="rounded-none border-gray-200 text-[#111] text-sm h-10">
            <SelectValue />
>>>>>>> 7a4c2f5 (bold urban redesign)
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
<<<<<<< HEAD
<<<<<<< HEAD
            <SelectItem value="name">Name: A–Z</SelectItem>
=======
            <SelectItem value="name">Name: A to Z</SelectItem>
>>>>>>> bd28705 (initial commit)
=======
            <SelectItem value="name">Name: A–Z</SelectItem>
>>>>>>> 7a4c2f5 (bold urban redesign)
          </SelectContent>
        </Select>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="space-y-3">
        <label className="font-condensed text-xs font-600 tracking-widest uppercase text-gray-400">
          Daily: ₱{filters.priceRange[0]} – ₱{filters.priceRange[1]}
        </label>
        <Slider min={0} max={5000} step={100} value={filters.priceRange} onValueChange={(v) => onFilterChange({ ...filters, priceRange: v })} />
      </div>

      <div className="flex items-center justify-between">
        <label className="font-condensed text-xs font-600 tracking-widest uppercase text-gray-400">Available Only</label>
        <Switch checked={filters.availableOnly} onCheckedChange={(v) => onFilterChange({ ...filters, availableOnly: v })} />
=======
      <div className="space-y-2">
        <Label htmlFor="price-range">
          Price range (daily): ₱{filters.priceRange[0]} - ₱{filters.priceRange[1]}
        </Label>
=======
      <div className="space-y-4">
        <label className="text-[0.65rem] tracking-[0.15em] uppercase text-[#1a2e1a]/50">
          Daily Rate: ₱{filters.priceRange[0]} – ₱{filters.priceRange[1]}
        </label>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
        <Slider
          min={0} max={5000} step={100}
          value={filters.priceRange}
          onValueChange={(value) => onFilterChange({ ...filters, priceRange: value })}
          className="mt-2"
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-[0.65rem] tracking-[0.15em] uppercase text-[#1a2e1a]/50">Available Only</label>
        <Switch
          checked={filters.availableOnly}
          onCheckedChange={(checked) => onFilterChange({ ...filters, availableOnly: checked })}
        />
>>>>>>> bd28705 (initial commit)
=======
      <div className="space-y-3">
        <label className="font-condensed text-xs font-600 tracking-widest uppercase text-gray-400">
          Daily: ₱{filters.priceRange[0]} – ₱{filters.priceRange[1]}
        </label>
        <Slider min={0} max={5000} step={100} value={filters.priceRange} onValueChange={(v) => onFilterChange({ ...filters, priceRange: v })} />
      </div>

      <div className="flex items-center justify-between">
        <label className="font-condensed text-xs font-600 tracking-widest uppercase text-gray-400">Available Only</label>
        <Switch checked={filters.availableOnly} onCheckedChange={(v) => onFilterChange({ ...filters, availableOnly: v })} />
>>>>>>> 7a4c2f5 (bold urban redesign)
      </div>
    </div>
  );
}
