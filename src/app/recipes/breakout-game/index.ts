import { combineLatest, fromEvent, map, noop, of, pluck, startWith } from "rxjs"
import { gameSize } from "./constants"


const createGameObject = (x, y) => ({ x, y })

const player$ = combineLatest(
    of(
        {
            ...createGameObject(gameSize - 2, (gameSize / 2) - 1),
            score: 0, lives: 3
        }
    ),
    fromEvent(document, 'keyup')
        .pipe(
            startWith({ code: '' }),
            pluck('code')
        )
).pipe(
    map(([player, key]) => (
        key === 'ArrowLeft'
            ? player.y -= 1
            : key === 'ArrowRight'
                ? player.y += 1
                : noop
            , player
        )
    )
)