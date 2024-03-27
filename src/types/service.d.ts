export type Service  = {
    name: string;
    description: string;
    service_time: string;
    rate: number;
    image: string | File;
    promotion: number;
    category: number;
}

/* {
    "name": [
      "This field is required."
    ],
    "description": [
      "This field is required."
    ],
    "service_time": [
      "This field is required."
    ],
    "rate": [
      "This field is required."
    ],
    "image": [
      "No file was submitted."
    ],
    "promotion": [
      "This field is required."
    ],
    "category": [
      "This field is required."
    ]
  } */