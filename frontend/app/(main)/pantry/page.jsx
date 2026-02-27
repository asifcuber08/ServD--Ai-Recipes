"use client";

import {
  deletePantryItems,
  getPantryItems,
  updatePantryItems,
} from "@/actions/pantry.actions";
import AddToPantryModal from "@/components/AddToPantryModal";
import PricingModal from "@/components/PricingModal";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { Package, Plus, Sparkles } from "lucide-react";
import React, { useEffect, useState } from "react";

const Pantrypage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editValuse, setEditValuse] = useState({ name: "", quantity: "" });

  // Fetch pantry items
  const {
    loading: loadingItems,
    data: itemsData,
    fn: fetchItems,
  } = useFetch(getPantryItems);

  // Delete item
  const {
    loading: deleting,
    data: deleteData,
    fn: deleteItem,
  } = useFetch(deletePantryItems);

  //Update item
  const {
    loading: updating,
    data: updateData,
    fn: updateItem,
  } = useFetch(updatePantryItems);

  // Load items on mount
  useEffect(() => {
    fetchItems();
  }, []);

  // Update items when data arrives
  useEffect(() => {
    if (itemsData?.success) {
      setItems(itemsData.items);
    }
  }, [itemsData]);
  const handleModalSuccess = (params) => {};

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Package className="w-16 h-16 text-orange-600" />
              <div className="">
                <h1 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
                  My Pantry
                </h1>
                <p className="text-stone-600 font-light">
                  Manage your ingredients and discover what you can cook
                </p>
              </div>
            </div>

            <Button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:flex"
              size="lg"
              variant="primary"
            >
              <Plus className="w-5 h-5" />
              Add to Pantry
            </Button>
          </div>
          {itemsData?.scansLimit !== undefined && (
            <div className="bg-white py-3 px-4 border-2 border-stone-200 inline-flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-orange-600" />
              <div className="text-sm">
                {itemsData.scansLimit === "unlimited" ? (
                  <>
                    <span className="font-bold text-gray-600">∞</span>
                    <span className="text-stone-500">
                      {" "}
                      Unlimited AI scans (Pro Plan)
                    </span>
                  </>
                ) : (
                  <PricingModal>
                    <span className="text-stone-500 cursor-pointer">
                      Upgrade to Pro for unlimited Pantry scans
                    </span>
                  </PricingModal>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Quick Action Card - Find Recipes */}

        {/* Loading State */}

        {/* Pantry Items Grid */}

        {/* Empty State */}
      </div>

      {/* Add to Pantry Modal */}
      <AddToPantryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleModalSuccess}
      />
    </div>
  );
};

export default Pantrypage;
