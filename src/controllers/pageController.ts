import { Request, Response } from "express";
import {creatMenuObject}from "../helpers/creatMenuObject"
import { Pet } from "../models/Pets";

export const home =(req:Request,res:Response)=>{
    let list =Pet.getAll;
res.render('pages/page',{
    list,
    menu:creatMenuObject('all'),
    banner:{
        title:'Todos os animais  ',
        background:'allanimals.jpg'
    }
});

}
export const dogs =(req:Request,res:Response)=>{
    let list=Pet.getFromType('dog');
    res.render('pages/page',{
        list,
        menu:creatMenuObject('dogs'),
    
        banner:{
            title:'cachorros ',
            background:'banner_dog.jpg'
        }
    })
    
}
export const cats =(req:Request,res:Response)=>{
    let list=Pet.getFromType('cat');
    res.render('pages/page',{
        list,
        menu:creatMenuObject('cats'),       
        banner:{
            title:'Gatos ',
            background:'banner_cat.jpg'
        }
    })
    
}
export const fishes =(req:Request,res:Response)=>{
    let list=Pet.getFromType('fish');
    res.render('pages/page',{
        list,
        menu:creatMenuObject('fishes'),
        banner:{
            title:'Peixes ',
            background:'banner_fish.jpg'
        }
    })
    
}