# Solitaire


ref:
https://en.wikipedia.org/wiki/Peg_solitaire



Outer Tile:
<div data-item-row="0" data-item-column="0" class="outside">
	<div></div>
</div>

Occupied:
<div data-item-row="0" data-item-column="2" class="occupied ">
	<div class="inner"></div>
</div>

Occupied, Draggable:
<div data-item-row="1" data-item-column="3" class="occupied draggable">	
	<div class="inner" draggable="true">
		<div class=" down_move"></div>
	</div>
</div>

Empty, Droppable:
<div data-item-row="3" data-item-column="3" class="empty droppable">
	<div class="inner" ondragover="event.preventDefault()"></div>
</div>

Empty:
<div data-item-row="3" data-item-column="5" class="empty ">
	<div class="inner"></div>
</div>


Arrows:
	.up_move
  .right_move
	.down_move
	.left_move


svg.addEventListener('touchstart', startDrag);
svg.addEventListener('touchmove', drag);
svg.addEventListener('touchend', endDrag);
svg.addEventListener('touchleave', endDrag);
svg.addEventListener('touchcancel', endDrag);

