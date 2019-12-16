import { TouchEvent } from 'react'

type touchEvents = 'dragDown' | 'dragUp' | 'dragLeft' | 'dragRight'

class TouchObserver {
    constructor(sensibility: number = 50) {
        this.ongoingTouches = new Map()
        this.listeners = new Map()

        this.sensibility = sensibility
    }

    reactBind() {
        return {
            onTouchStart: (e: TouchEvent) => this.onTouchStart(e),
            onTouchEnd: (e: TouchEvent) => this.onTouchEnd(e),
            onTouchCancel: (e: TouchEvent) => this.onTouchCancel(e),
            onTouchMove: (e: TouchEvent) => this.onTouchMove(e),
        }
    }

    /** handling touches updates */
    public ongoingTouches: Map<number, { x: number; y: number }>

    public sensibility: number

    onTouchStart(event: TouchEvent) {
        for (let i = 0; i < event.touches.length; i++) {
            const { identifier, pageX: x, pageY: y } = event.touches[i]

            this.ongoingTouches.set(identifier, { x, y })
        }
    }

    onTouchEnd(event: TouchEvent) {
        for (let i = 0; i < event.changedTouches.length; i++) {
            const { identifier } = event.changedTouches[i]

            this.ongoingTouches.delete(identifier)
        }
    }

    onTouchCancel(event: TouchEvent) {
        for (let i = 0; i < event.changedTouches.length; i++) {
            const { identifier } = event.changedTouches[i]

            this.ongoingTouches.delete(identifier)
        }
    }

    onTouchMove(event: TouchEvent) {
        for (let i = 0; i < event.changedTouches.length; i++) {
            const { identifier, pageX: x, pageY: y } = event.changedTouches[i]

            if (this.ongoingTouches.has(identifier)) {
                const { x: oldX, y: oldY } = this.ongoingTouches.get(identifier)

                if (oldY < y) this.emit('dragUp')
                else if (oldY > y) this.emit('dragDown')

                if (oldX < x) this.emit('dragLeft')
                else if (oldX > x) this.emit('dragRight')

                this.ongoingTouches.set(identifier, { x, y })
            }
        }
    }

    /** Observer logic */
    private listeners: Map<string, (() => void)[]>

    addListener(event: touchEvents, listener: () => void) {
        if (this.listeners.has(event)) {
            const listeners = this.listeners.get(event)
            listeners.push(listener)
            this.listeners.set(event, listeners)
        } else {
            this.listeners.set(event, [listener])
        }
    }

    private emit(event: touchEvents) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).forEach(listeners => listeners())
        }
    }
}

export default TouchObserver
