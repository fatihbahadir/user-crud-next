"use client";
import React from "react";
import Button from "@/components/atoms/Button";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
}) => (
  <div className="flex justify-between items-center mt-4">
    <Button
      onClick={onPrev}
      className={`text-primary ${
        currentPage === 1 && "opacity-50 cursor-not-allowed"
      }`}
      disabled={currentPage === 1}
    >
      Previous
    </Button>
    <span className="text-primary">
      Page {currentPage} of {totalPages}
    </span>
    <Button
      onClick={onNext}
      className={`text-primary ${
        currentPage === totalPages && "opacity-50 cursor-not-allowed"
      }`}
      disabled={currentPage === totalPages}
    >
      Next
    </Button>
  </div>
);

export default PaginationControls;