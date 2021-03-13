<mat-toolbar>To do list:</mat-toolbar>
<mat-card class="todocard">


	<mat-list role="list">

		<mat-toolbar *ngFor="let item of todoList | async;" class="todoitem" color="primary">
			<mat-toolbar-row>

				<span [ngClass]="{'done-true': item.isDone, 'done-false': !item.isDone}">{{item.content}}</span>
				<span class="example-spacer"></span>
				<mat-icon (click)="markItemAsDone(item)" class="btn" *ngIf="!item.isDone"> check</mat-icon>
				<mat-icon (click)="markItemAsNotDone(item)" class="btn" *ngIf="item.isDone"> undo</mat-icon>

				<mat-icon (click)="editItem(item)" class="btn"> edit</mat-icon>
				<mat-icon (click)="deleteItem(item.id)" class="btn">delete</mat-icon>
			</mat-toolbar-row>
		</mat-toolbar>

	</mat-list>
	<form class="example-form">
		<mat-form-field class="full-width">
			<input matInput placeholder="Enter To do" class="textareafull" [(ngModel)]="inputValue.content" name="inputValue">
		</mat-form-field>
		<span class="example-spacer"></span>
		<button mat-button (click)="addNewItem()" *ngIf="!editValue">Add</button>
		<button mat-button (click)="saveNewItem()" *ngIf="editValue">Save</button>
	</form>

</mat-card>