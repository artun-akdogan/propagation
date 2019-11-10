var patterns = [
    {
        id: "isotropic",
        name: "Isotropic",
        angles: Array.apply(null, Array(361)).map(function (_, i) { return i; }),
        amplitudes: Array.apply(null, Array(361)).map(function (_, i) { return 1; }),
        scale: "linear"
    }
]