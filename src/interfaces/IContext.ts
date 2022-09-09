import { IUser } from "./IUser";
import { IRegisterData } from "./IRegister";
import { Dispatch } from "react";

export interface IContext {
  user: IUser | null;
  setUser: Function; //React.Dispatch<React.SetStateAction<null>>;
  logout: () => void;
  token: string | null;
  isModal: boolean;
  setIsModal: Function;
  tokenSetter: (newToken: string) => void;
  newUser: (data: IRegisterData) => void;
  isUpdate: boolean;
  setIsUpdate: Function;
  isNewTech: boolean;
  setIsNewTech: Function;
  closeModal: () => void;
  newTech: () => void;
  selectedTech?: string | null;
  setSelectedTech: Function;
}
