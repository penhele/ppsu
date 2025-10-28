"use client";

import { SkeletonButton, SkeletonTitle } from "@/components/skeleton/skeleton";
import SkeletonInputForm from "@/components/skeleton/skeleton-input-form";

const SkeletonDaftarPegawaiForm = () => {
  return (
    <div className="flex flex-col gap-8 border rounded-xl p-4">
      <SkeletonTitle />

      <div className="flex flex-col gap-4">
        <SkeletonInputForm />

        <div className="grid grid-cols-2 gap-4">
          <SkeletonInputForm />
          <SkeletonInputForm />
        </div>

        <SkeletonInputForm />

        <div className="grid grid-cols-5 gap-4">
          <SkeletonInputForm />
          <SkeletonInputForm />
          <SkeletonInputForm />
          <SkeletonInputForm />

          <div className="grid grid-cols-2 gap-4">
            <SkeletonInputForm />
            <SkeletonInputForm />
          </div>
        </div>

        <SkeletonInputForm />
        <SkeletonInputForm />
        <SkeletonInputForm />

        <div className="grid grid-cols-2 gap-4">
          <SkeletonInputForm />
          <SkeletonInputForm />
        </div>

        <SkeletonInputForm />
        <SkeletonInputForm />

        <SkeletonButton />
      </div>
    </div>
  );
};

export default SkeletonDaftarPegawaiForm;
