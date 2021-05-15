/* Brute force */
let getTrappedRainWaterBruteForce = (heights) => {
    let totalWater = 0;
    for(let p = 0; p < heights.length; p++) {
        let leftP = p;
        let rightP = p;
        let maxLeft = 0;
        let maxRight = 0;

        while(leftP >= 0) {
            maxLeft = Math.max(maxLeft, heights[leftP]);
            leftP--;
        }
        while(rightP < heights.length) {
            maxRight = Math.max(maxRight, heights[rightP]);
            rightP++;
        }

        const currentWater = Math.min(maxLeft,maxRight) - heights[p];

        if (currentWater >= 0) {
            totalWater += currentWater;
        }
    }

    return totalWater;
}

/* Optimized */
let getTrappedRainWaterOptimized = (heights) => {
    let left = 0;
    let right = heights.length - 1;
    let totalWater = 0;
    let maxLeft = 0;
    let maxRight = 0;

    while(left < right) {
        if (heights[left] < heights[right]) {
            if (heights[left] >= maxLeft) {
                maxLeft = heights[left];
            } else {
                totalWater += maxLeft - heights[left];
            }
            left++;
        } else {
            if (heights[right] >= maxRight) {
                maxRight = heights[right];
            } else {
                totalWater += maxRight - heights[right];
            }
            right--;
        }
    }
    return totalWater;
}

// console.log(getTrappedRainWaterOptimized([0,1,0,2,1,0,3,1,0,1,2]));
// console.log(getTrappedRainWaterOptimized([3,4,3]));