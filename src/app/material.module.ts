import {NgModule} from '@angular/core';
import {MatButtonModule,MatIconModule,MatFormFieldModule, MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule} from '@angular/material';
import {MatInputModule,} from '@angular/material/input';

@NgModule({
    imports:[MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule],
    exports:[MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule]
})
export class MaterialModule{}