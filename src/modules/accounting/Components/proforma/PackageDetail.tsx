import {
  FacebookIcon,
  GoogleMapsIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/icons";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { handleNumericInput } from "@/lib/utils";
import {
  FileVideo,
  GalleryHorizontal,
  Image,
  RectangleHorizontal,
  RectangleVertical,
} from "lucide-react";
import { useEffect } from "react";

interface Props {
  form?: any;
  field?: any;
  label: string;
  type?: string;
  warning?: string;
  packageIndex?: string;
  fieldIndex?: number;
  list?: string;
  options?: string;
}

interface Field {
  field: {
    value: string[];
    onChange: (value: string[]) => void;
  };
}

export function DetailCheckbox({ field, label, warning }: Props) {
  // Si
  // si tiene warning se devuelve Si(Todos los recursos entrega el cliente virtualmente)
  // Si Max. 10
  const warnings = [
    "Si(Todos los recursos entrega el cliente virtualmente)",
    "Si Max. 10",
  ];
  const checked =
    field.value === "Si" ||
    field.value === "Si(Todos los recursos entrega el cliente virtualmente)" ||
    field.value === "Si Max. 10";
  const onCheckedChange = (checked: boolean | string) => {
    field.onChange(
      checked
        ? warning
          ? warning === "Todos los recursos entrega el cliente virtualmente"
            ? warnings[0]
            : warnings[1]
          : "Si"
        : "No"
    );
  };
  return (
    <FormItem className="flex flex-row items-center justify-between space-x-3 space-y-0 p-4">
      <FormLabel className="font-normal text-base flex flex-col">
        {label}
        {warning && <span className="text-muted-foreground">({warning})</span>}
      </FormLabel>
      <FormControl>
        <Checkbox
          checked={checked}
          onCheckedChange={(checked) => onCheckedChange(checked)}
        />
      </FormControl>
    </FormItem>
  );
}

const socialMediaList = [
  {
    id: "Facebook",
    label: "Facebook",
    icon: <FacebookIcon />,
  },
  {
    id: "IG",
    label: "Instagram",
    icon: <InstagramIcon />,
  },
  {
    id: "Tiktok",
    label: "Tiktok",
    icon: <TikTokIcon />,
  },
  {
    id: "Google maps",
    label: "Google Maps",
    icon: <GoogleMapsIcon />,
  },
] as const;

const orientationList = [
  {
    id: "Vertical",
    label: "Vertical",
    icon: <RectangleVertical className="stroke-muted-foreground" />,
  },
  {
    id: "Horizontal",
    label: "Horizontal",
    icon: <RectangleHorizontal className="stroke-muted-foreground" />,
  },
] as const;

const contentTypeList = [
  {
    id: "Imagen",
    label: "Imagen",
    icon: <Image className="stroke-muted-foreground" />,
  },
  {
    id: "Carrusel",
    label: "Carousel",
    icon: <GalleryHorizontal className="stroke-muted-foreground" />,
  },
  {
    id: "Video",
    label: "Video",
    icon: <FileVideo className="stroke-muted-foreground" />,
  },
] as const;

export function DetailCheckboxGroup({
  label,
  form,
  field,
  packageIndex,
  fieldIndex,
  list = "socialMediaList",
}: Props) {
  const onCheckedChange = (checked: boolean | string, id: string) => {
    let valueArray =
      field.value && field.value !== "-" ? field.value.split(" - ") : [];
    if (checked) {
      valueArray = [...valueArray, id];
    } else {
      valueArray = valueArray.filter((item: string) => item !== id);
    }
    const newValue = valueArray.length > 0 ? valueArray.join(" - ") : "-";
    field.onChange(newValue);
  };

  const listToUse =
    list === "socialMediaList"
      ? socialMediaList
      : list === "orientationList"
      ? orientationList
      : list === "contentTypeList"
      ? contentTypeList
      : [];

  return (
    <FormItem className="flex flex-row items-center justify-between space-x-3 space-y-0 p-4">
      <FormLabel className="font-normal text-base">{label}</FormLabel>
      <div className="flex gap-4">
        {listToUse.map((item) => (
          <FormField
            key={item.id}
            control={form.control}
            name={`package.${packageIndex}.package_items.${fieldIndex}.value`}
            render={({ field }: Field) => {
              return (
                <FormItem
                  key={item.id}
                  className="flex flex-row items-center space-x-3 space-y-0"
                >
                  <FormLabel className="font-normal">{item.icon}</FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(item.id)}
                      onCheckedChange={(checked) => {
                        onCheckedChange(checked, item.id);
                      }}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
        ))}
      </div>
    </FormItem>
  );
}

const detailInputTypes = [
  {
    id: "post",
    span: "Publicaciones",
    label: "publicaciones",
  },
  {
    id: "stories",
    span: "Stories",
    label: "historias",
  },
  {
    id: "monitoring",
    span: "Monitoreo",
    label: "monitoreo",
  },
  {
    id: "video",
    span: "Max 30 seg",
    label: "videos de max 30 seg.",
  },
  {
    id: "product",
    span: "Productos max.",
    label: "productos max.",
  },
] as const;

export function DetailInput({ label, type, field }: Props) {
  const splitValue = field.value ? field.value.split(" ") : ["", ""];
  const splitType = splitValue.slice(1).join(" ");

  const value = type ? splitValue[0] : field.value;
  const typeValue = splitType
    ? splitType
    : detailInputTypes.find((detail) => detail.id === type)?.label || "";

  return (
    <FormItem className="flex flex-row items-center justify-between space-x-3 space-y-0 p-4">
      <FormLabel className="font-normal text-base">{label}</FormLabel>
      <div className={`flex items-center gap-4 ${type && "w-48"}`}>
        <FormControl>
          <Input
            type="text"
            className={`${type ? "w-12" : "w-full"}`}
            value={value}
            onInput={type ? handleNumericInput : undefined}
            onChange={(e) => {
              type
                ? field.onChange(`${e.target.value} ${typeValue}`)
                : field.onChange(e.target.value);
            }}
          />
        </FormControl>
        {detailInputTypes.map(
          (detail) =>
            detail.id === type && <span key={detail.id}>{detail.span}</span>
        )}
      </div>
    </FormItem>
  );
}

const typeList = [
  {
    id: "Basico",
    label: "Basico",
  },
  {
    id: "Intermedio",
    label: "Intermedio",
  },
  {
    id: "Avanzado",
    label: "Avanzado",
  },
] as const;

const webTypeList = [
  {
    id: "On Page",
    label: "On Page",
  },
  {
    id: "Multipage",
    label: "Multipage",
  },
] as const;

const webDesignList = [
  {
    id: "Estandar",
    label: "Estandar",
  },
  {
    id: "Personalizado",
    label: "Personalizado",
  },
] as const;

export function DetailRadioGroup({ field, label, options }: Props) {
  const optionsToUse =
    options === "typeList"
      ? typeList
      : options === "webTypeList"
      ? webTypeList
      : options === "webDesignList"
      ? webDesignList
      : [];
  return (
    <FormItem className="flex flex-row items-center justify-between space-x-3 space-y-0 p-4">
      <FormLabel className="font-normal text-base">{label}</FormLabel>
      <FormControl>
        <RadioGroup
          onValueChange={field.onChange}
          value={field.value}
          className="flex gap-4"
        >
          {optionsToUse.map((option, index) => (
            <FormItem
              className="flex items-center space-x-3 space-y-0"
              key={index}
            >
              <FormControl>
                <RadioGroupItem value={option.id} />
              </FormControl>
              <FormLabel className="font-normal">{option.label}</FormLabel>
            </FormItem>
          ))}
        </RadioGroup>
      </FormControl>
    </FormItem>
  );
}
