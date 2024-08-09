import { MouseEventHandler } from "react";

export interface CustomButtomProps {
    title:String,
    containerStyles?:String,
    handleClick?:MouseEventHandler<HTMLButtonElement>,
    btnType?:"button" | "submit"
    textStyles?:String,
    rightIcon?:string,
    isDisable?:boolean,
}

export interface Manufacture{
    manufactur: String,
    setManufactur?: (manufactur:String) => void;
}
export interface CarProps{
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }

  export interface HomeProps {
    searchParams: FilterProps;
  }

  export interface OptionProps {
    title: string;
    value: string;
  }
  
  export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }