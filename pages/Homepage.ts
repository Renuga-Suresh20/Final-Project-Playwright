import {Page} from '@playwright/test';
import { BasePage } from './BasePage';
import allocators from '../locators/locators.json'

export class Login extends BasePage{
    private locators=allocators.login;
    constructor(page:Page){
        super(page);
    }
    async testNumber(){
        
    }
    async captureError(){
        
    }
}
