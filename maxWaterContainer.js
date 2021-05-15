/* Brute forece */
let getMaxWaterBruteForce = (heights) => {
    let maxArea = 0;
    for(let p1 = 0; p1 < heights.length; p1++) {
        for(let p2 = p1 + 1; p2 < heights.length; p2++) {
            const height = Math.min(heights[p1], heights[p2]);
            const width = p2 - p1;
            const area = height * width;
            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
}

/* optimized solution */
let getMaxWaterOptimal = (heights) => {
    let maxArea = 0;
    let p1 = 0;
    let p2 = heights.length - 1;
    
    while(p1 < p2) {
        const height = Math.min(heights[p1], heights[p2]);
        const width = p2 - p1;
        const area = height * width;
        maxArea = Math.max(maxArea, area);
        if (heights[p1] <= heights[p2]) {
            p1++;
        } else {
            p2--
        }
    }
    return maxArea;
}

// console.log(getMaxWaterOptimal([7,1,2,3,9]));