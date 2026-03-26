import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ai } from '../Services/ai';

@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './scheduler.html',
  styleUrl: './scheduler.css'
})
export class Scheduler {}