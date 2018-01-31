try {
    var pool1 = createObjectPool();
    var pool2 = createObjectPool();

    var ori = {id: 1};
    var likeOriButNotOri = {id: 1};

    pool1.add(ori);
    pool1.add(ori);
    pool1.add(ori);
    pool2.add(likeOriButNotOri);

    if (!pool1.contains(ori)) {
        throw new Error("Ori should be contained");
    }

    if (pool1.contains(likeOriButNotOri)) {
        throw new Error("likeOri should not be contained");
    }

    var res = pool1.pop();
    if (res != ori) {
        throw new Error("Ori should be returned from pop");
    }

    res = pool1.pop();
    if (res != undefined) {
        throw new Error("Pool should be empty");
    }

    console.log("PASS");
}
catch(err) {
    console.log("FAIL: " + err.message);
}
