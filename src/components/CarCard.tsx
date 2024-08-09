"use client";
import React, { useState } from "react";
import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utiles";
import Image from "next/image";
import CustomButton from "./CustomButton";
import {CarDetails} from "@/components" 

interface CarCardProps {
  car: CarProps;
}

export default function CarCard({ car }: CarCardProps) {
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;
  const imageUrl = generateCarImageUrl(car);

  const carRent = calculateCarRent(city_mpg, year);
  const [open, setOpen] = useState(false)
  return (
    <div className="car-card group ">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium"> /day </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={imageUrl}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invesible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="streeing wheel"
              width={18}
              height={18}
            />
            <p className="text-[12px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="tire" width={18} height={18} />
            <p className="text-[12px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" alt="streeing wheel" width={18} height={18} />
            <p className="text-[12px]">{city_mpg} mpg</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="view more"
            containerStyles="w-full py-[30px] rounded-xl  bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={open} closeModal={() => setOpen(false)} car={car} />
    </div>
  );
}
