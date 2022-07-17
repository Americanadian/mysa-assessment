// This function compares version strings (ex.major.minor.patch)
//Returns:
// -1 if a < b
// 1 if a > b
// 0 if a = b
function compareVersionAToVersionBAndReturnGreater (A, B) {
    const i, d, x;
    var regExNoDecimals = /(\.0+)+$/;
    let segmentsA = a.replace(regExNoDecimals, '').split('.')
    let segmentsB = b.replace(regExNoDecimals, '').split('.')
    for (i = 0; i < Math.min(segmentsA.length, segmentsB.length); i++) {
        d = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10); if
        (d) {
            return d;
        }
    }
    return 0;
}
