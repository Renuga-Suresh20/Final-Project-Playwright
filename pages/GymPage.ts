import {Page} from '@playwright/test';
import { BasePage } from './BasePage';
import allocators from '../locators/locators.json'

export class Gym extends BasePage{
    private locators=allocators.Gym;
    constructor(page:Page){
        super(page);
    }
    async getData(){
        
    }
    async display(){
        
    }
}
