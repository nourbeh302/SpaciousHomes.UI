import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'
import { CorpService } from "./services/corp.service";
@NgModule({
    declarations: [

    ],
    exports: [

    ],
    imports: [
        HttpClientModule
        
    ],
    providers: [
        CorpService
    ]
})
export class CorpModule
{
    
}