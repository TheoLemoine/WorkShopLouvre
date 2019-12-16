const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t

const MAX_VERTICES = 256
const MAX_VERTICES_MASK = MAX_VERTICES - 1

class Simple1DNoise {
    public amplitude: number
    public scale: number
    private r: number[]

    constructor(amplitude: number = 1, scale: number = 1) {
        this.amplitude = amplitude
        this.scale = scale
        this.r = []

        for (let i = 0; i < MAX_VERTICES; ++i) {
            this.r.push(Math.random())
        }
    }

    getVal(x: number) {
        const scaledX = x * this.scale
        const xFloor = Math.floor(scaledX)
        const t = scaledX - xFloor
        const tRemapSmoothstep = t * t * (3 - 2 * t)

        /// Modulo using &
        const xMin = xFloor & MAX_VERTICES_MASK
        const xMax = (xMin + 1) & MAX_VERTICES_MASK

        const y = lerp(this.r[xMin], this.r[xMax], tRemapSmoothstep)

        return y * this.amplitude
    }
}

export default Simple1DNoise
