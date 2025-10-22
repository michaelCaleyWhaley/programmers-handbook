#Requires AutoHotkey v2.0

!Left::Send '{Home}'
!+Left::Send '+{Home}'
!Right::Send '{End}'
!+Right::Send '+{End}'


; ===========================
; Middle-click drag L/R -> switch virtual desktop (Windows 10/11)
; Hold the wheel button and drag ≥ threshold horizontally.
; ===========================

; --- Settings ---
threshold := 50            ; horizontal pixels to trigger
verticalSlack := 120        ; ignore if vertical motion exceeds this (prevents accidental triggers)
checkInterval := 15         ; ms between checks
cooldown := 30             ; ms between gestures (debounce)
passThroughMove := 8        ; px: if you barely move, treat as normal middle-click
passThroughHold := 150      ; ms: if quick tap and minimal move, pass the click through

global lastGestureTime := 0

; Intercept middle button (no tilde so we can decide to pass it through)
*MButton::MButtonDragSwitch()

MButtonDragSwitch() {
    global threshold, verticalSlack, checkInterval, cooldown
    global passThroughMove, passThroughHold, lastGestureTime

    startTime := A_TickCount
    MouseGetPos &sx, &sy
    triggered := false

    ; Track while the button is held down
    while GetKeyState("MButton", "P") {
        Sleep checkInterval
        MouseGetPos &x, &y
        dx := x - sx
        dy := y - sy

        ; If the drag is mostly vertical beyond slack, ignore and keep watching
        if Abs(dy) > verticalSlack
            continue

        ; Trigger once when horizontal threshold is crossed
        if Abs(dx) >= threshold {
            now := A_TickCount
            if (now - lastGestureTime) >= cooldown {
                if (dx > 0)
                    Send "^#{Right}"   ; Ctrl+Win+Right -> next desktop
                else
                    Send "^#{Left}"    ; Ctrl+Win+Left  -> previous desktop
                lastGestureTime := now
            }
            triggered := true
            ; wait until released so the gesture fires once
            while GetKeyState("MButton", "P")
                Sleep checkInterval
            break
        }
    }

    ; If not triggered, emulate a normal middle-click if it looked like a tap
    if !triggered {
        endTime := A_TickCount
        totalTime := endTime - startTime
        MouseGetPos &ex, &ey
        if (Abs(ex - sx) <= passThroughMove) && (Abs(ey - sy) <= passThroughMove) && (totalTime <= passThroughHold) {
            Send "{MButton}"
        }
        ; otherwise: swallow the event (you dragged but not enough to trigger)
    }
}
