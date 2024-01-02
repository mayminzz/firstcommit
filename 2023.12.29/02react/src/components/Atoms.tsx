import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" ="TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

//selector
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
    // if (category === "TO_DO")
    //   return toDos.filter((toDo) => toDo.category === "TO_DO");
    // if (category === "DOING")
    //   return toDos.filter((toDo) => toDo.category === "DOING");
    // if (category === "DONE")
    //   return toDos.filter((toDo) => toDo.category === "DONE");
  },
});
