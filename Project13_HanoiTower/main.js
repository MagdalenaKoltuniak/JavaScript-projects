// przekłada n krążków z A (korzystając z B) na C

function tower(n, A, B, C) {
	if (n > 0) {
		tower(n - 1, A, C, B);
		console.log(`${A} -> ${C}`);
		tower(n - 1, B, A, C);
	}
}

tower(3, 'A', 'B', 'C');

// version II

function towerOfHanoi(n, fromRod, toRod, usingRod) {
	if (n === 1) {
		console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
		return;
	}
	towerOfHanoi(n - 1, fromRod, usingRod, toRod);
	console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
	towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, 'A', 'C', 'B');
