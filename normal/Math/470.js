/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
 const rand10 = () => {
    // (randX() - 1)*Y + randY() 可以等概率的生成[1, X * Y]范围的随机数
    let m, n, num;
    // 首先 rand7()-1得到的数的集合为 {0,1,2,3,4,5,6}
    //再乘 7 后得到的集合为 {0，7，14，21，28，35，42}
    //后面 +rand7() 得到的集合B为[1-49] 
    do {
        m = rand7();
        n = rand7();
        // 使生成的[1,49]等概率
        num = m + (n - 1) * 7;
    } while (num > 40);
    // 将[1,40]转化为[1,10]
    return 1 + ((num - 1) % 10);
};