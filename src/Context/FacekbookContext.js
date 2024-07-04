import { useContext,createContext } from "react";

export const FacebookPostContext=createContext({
posts:[],
addPost:(post)=>{},
UpdatePost:(id,post)=>{},
delete:(id)=>{}
})

export const useFacebookPost=()=>{
  return useContext(FacebookPostContext)
}

export const FacebookpostProvider=FacebookPostContext.Provider
