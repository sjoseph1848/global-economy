import {NgModule} from '@angular/core';
import {MatButtonModule,MatIconModule,MatFormFieldModule, MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatListModule} from '@angular/material';
import {MatInputModule,} from '@angular/material/input';

@NgModule({
    imports:[MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatListModule],
    exports:[MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatListModule]
})
export class MaterialModule{}