// //Problem: Given the percentage of test cases passed in a CI build, report build health.
// 100% → Green Build
// 90–99% → Stable (investigate failures)
// 70–89% → Unstable
// Below 70% → Broken Build (block deployment)
// Sample Input/Output:
// Input: 95
// Output: 🟡 Stable — Investigate failures
// Input: 65
// Output: 🔴 Broken Build — Block deployment
//******************************************************************** */

let CI_build = 98;

console.log("Input : " + CI_build)


if (CI_build == 100) {
    console.log("Output: Green Build")

} else if (CI_build >= 90 && CI_build <= 99) {


    console.log("Output: " + "Stable (investigate failures)")
} 