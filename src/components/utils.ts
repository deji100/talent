import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { RootState } from "../state-manager/store"
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

// export const useAppDispatch: () => AppDispatch = useDispatch

// export const useAppDispatch = () => useDispatch<AppDispatch>()

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
 
export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector