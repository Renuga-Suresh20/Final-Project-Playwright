import {Page} from '@playwright/test';
import { BasePage } from './BasePage';
import allocators from '../locators/locators.json'

export class Advertise extends BasePage{
    private locators=allocators.Advertise;
    constructor(page:Page){
        super(page);
    }
    async getSucessCount(){
        
    }
}