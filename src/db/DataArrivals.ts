
export type Product = {
  id: number,
  img: string,
  title: string
  price: string
  like: boolean
}

export const data: Product[] = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo9STdCI7Vfj4naWj-7XqsvtNS1YIlY_LHcXAxut14MA&s",
    title: "Solitare Dreak Ring",
    price: "$1,250",
    like: false
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKuJ9w1JSaM7HRBZOIdnm1B5IeYfAg6pziDkIKCJVzMA&s",
    title: "Golden Halo Necklace",
    price: "$980",
    like: false
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1xqyAzZIz0h7QtB5xw1QR21TLSJEzVV1Z0b4zkfIRA&s=10",
    title: "Eternity Braclet",
    price: "$1,100",
    like: false
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWMsUTyD3G0O_RapPHRKusdq42va6mxWeCX1zib6YUw&s=10",
    title: "Radiant Drop Earrings",
    price: "$760",
    like: false
  }

]