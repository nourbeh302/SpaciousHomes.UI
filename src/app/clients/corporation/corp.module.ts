import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'
import { CorpService } from "./services/corp.service";
import { CorpAdditionalInfoComponent } from "src/app/core/components/corp-additional-info/corp-additional-info.component";
import { RouterModule } from "@angular/router";
@NgModule({
    declarations: [
        
        CorpAdditionalInfoComponent
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