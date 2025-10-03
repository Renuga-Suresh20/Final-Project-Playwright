import {Page} from '@playwright/test';
import { BasePage } from './BasePage';
import allocators from '../locators/locators.json'

export class HomeLoan extends BasePage{
    private locators=allocators.HomeLoan;
    constructor(page:Page){
        super(page);
    }
    async fillForm(){
        
    }
    
}