import { Component, OnInit } from '@angular/core';
import { Slot } from '../slot.model';
import { SlotService } from '../slot.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { EmailshareService } from '../emailshare.service';

@Component({
  selector: 'app-slot-book',
  templateUrl: './slot-book.component.html',
  styleUrls: ['./slot-book.component.css']
})
export class SlotBookComponent implements OnInit {
  slots: Slot[] = [];
  userId: string = '';
  userEmail: string = '';

  constructor(
    private slotService: SlotService,
    private datePipe: DatePipe,
    private router: Router,
    private emailshared:EmailshareService
  ) {}

  ngOnInit(): void {
    this.loadSlots();
  }

  loadSlots(): void {
    this.slotService.getSlots().subscribe((slots) => {
      this.slots = slots;
    });
  }

  bookSlot(selectedSlot: Slot): void {
    
    const userEmailInput=this.emailshared.getUserEmailID();
  
    if (userEmailInput !== null) {
      
      this.userEmail = userEmailInput;
      const bookingDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  
      console.log('Booking slot...');
      this.slotService.bookSlot(selectedSlot.slotId, this.userEmail, bookingDate)
        .subscribe((response) => {
          console.log('Booking successful:', response);
          window.location.reload();
        }, (error) => {
          console.error('Booking failed:', error);
        });
    } else {
      console.log('Booking canceled or incomplete.');
    }
  }
  
  
  

}

