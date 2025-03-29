
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const InquiryDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Show dialog on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore");
    if (!hasVisited) {
      setIsOpen(true);
      localStorage.setItem("hasVisitedBefore", "true");
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader className="relative">
          <Button 
            variant="ghost" 
            className="absolute right-2 top-2 h-8 w-8 p-0 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          <DialogTitle className="text-xl font-semibold mb-4">Welcome to Our Real Estate Platform</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" 
              alt="Property" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              Thank you for visiting our platform. Discover your dream property with our extensive collection of premium real estate listings.
            </p>
            
            <div className="flex justify-end">
              <Button onClick={() => setIsOpen(false)} className="bg-black hover:bg-gray-800 text-white">
                Explore Properties
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryDialog;
