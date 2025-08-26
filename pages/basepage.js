

export class basepage {
    constructor(page) {
        this.page = page;
    }

    async enterurl(url) {
        await this.page.goto(url);
    
    }

    async closepage() {
        await this.page.close();
       
    }

   
    }

