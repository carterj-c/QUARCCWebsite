import React, { useState, useEffect, useRef } from 'react';

const AsciiLogoAnimation = () => {
    const [isReady, setIsReady] = useState(false);
    const [displayContent, setDisplayContent] = useState({ type: 'text', data: '' });
    const [scale, setScale] = useState(0.5);
    const animationRef = useRef(null);
    const containerRef = useRef(null);

    const finalLogo = `                                                            √+++                               ∞∞√
                                                           =∞   =+                             ∞∞=
                                                          =≈    ∞∞             +π∞+           ×∞∞=
                                                           =+  ∞∞∞÷                 +         =∞∞≈
                                                             √+×≠∞≈≈+         +    ++         ≈∞∞∞
                                                                  ≈≠≠≠-π       +++--         ×∞∞∞√
                                                                    ∞≠∞≈÷+       -√-         ÷∞∞∞
                                                                      +=∞∞÷+     -√×         ≈∞∞∞      ∞∞  +=
                                                                        +≠∞≈÷+   +∞≈-       +∞∞∞≈      ∞                                                           ÷÷÷÷÷
                                                                          -≈√≠×+  ∞√≠+      ≈∞∞∞≈     ≠∞    +                                                      ÷  ÷÷
                                                                           +×≈√≠÷=∞√√≠×    ×∞∞∞∞=  ÷≈≈≠=+                 ≈+++                                      ÷÷÷
                                                                             -≠√√√√√√√≈- ∞=∞∞∞∞∞ ∞∞∞∞÷                   +     +                                      ÷
                                                             =-+++            -≠√√√√√√√∞≈∞∞∞∞∞∞∞∞∞∞≈                   ÷--     +                                                                ÷÷÷
                                                            ÷≠    +            +=√√√√√√√√√∞∞∞∞∞∞∞∞÷                 +--+-+++ √+                                       ÷÷                       ÷÷  ÷≈
                                                            ≠     ≠∞=+          =√√√∞∞∞√√√∞√∞∞∞∞∞∞            +---++++                         ÷÷÷÷                  ÷÷÷÷÷÷÷÷÷÷               ÷÷÷÷÷÷
                                                             +-∞+++=≠==×--+    ×=√√√√√-≠--×=∞∞∞∞∞∞≈×∞ ∞+-----÷÷---+                           ÷÷  ÷÷              ÷÷÷÷÷÷     ÷÷÷÷÷        ÷÷÷
                                                                      -=∞∞∞÷---≠√√√√√π-     =∞∞∞∞∞∞∞∞∞∞∞√≈×---+                                ÷÷÷÷ ÷÷÷         ÷÷÷÷            ÷÷÷÷  ÷÷÷
                                                                        ×=≈√π√√√∞√√π÷-+      ÷∞∞∞√√√∞∞∞∞≠+                                              ÷ ÷    ÷÷÷                ÷÷÷
                                                                           ∞∞∞∞∞∞∞∞≈-         -≈≈∞∞∞∞∞√≈                                                    ÷÷÷÷÷                  ÷÷÷
                                                                   =∞≈≈≈∞∞∞∞∞∞∞∞∞∞∞∞∞+      +=√√√√≠--------++×  +                                            ÷÷                    ÷÷÷
                                                             ÷∞∞∞∞∞∞∞∞∞∞∞≠===≠∞∞∞∞∞∞∞∞∞÷     -√√√√≈×     ≠--÷+   √                                            ÷÷                    ÷÷÷
                                                        ≈∞∞∞∞∞∞∞≠≠≠≠≠≠÷∞      π-≠∞∞√√∞√∞==÷=∞∞∞√√√∞          +   +                                            ÷÷                    ÷÷÷
                                             ×+  =-≈∞∞∞∞∞≈≈≈≈÷                   ∞∞√∞∞√√√∞∞∞∞∞∞∞∞√∞×                                                          ÷÷÷                   ÷÷÷
                                            +       ∞∞≈×                        -∞∞√√√√√∞∞∞∞∞∞∞∞∞∞∞∞≈+                                                         ÷÷                  ÷÷÷ ÷÷÷÷
                                             ∞      ÷                          -∞√√√√√√∞√∞≈∞∞∞∞∞∞∞∞∞∞∞∞÷                                                        ÷÷÷               ÷÷÷        ÷= ÷
                                              +   ∞+                         +=∞√≈≈≠√∞∞∞∞÷  -∞∞∞∞∞  ÷∞∞∞∞-                                                       ÷÷÷÷           ÷÷÷÷              ÷÷÷÷   ÷÷÷÷
                                                                          +-÷==--- ≈√√∞∞=     ∞∞∞∞≠   ÷∞∞∞∞×                                                   ÷÷  ÷÷÷÷÷÷÷÷÷÷÷÷÷÷                       ÷÷  ÷÷
                                                                    +++++-≠=-+    -≈√√∞-      ÷∞∞∞≈      ≠∞∞∞≠                                              ÷÷         ÷÷÷÷÷÷≠ ÷                        ÷÷÷÷÷
                                                                   +     -×       -∞√∞÷        ∞∞∞≈         ≈≈≠≈=                                          ÷                    ÷
                                                                   +      +       -√√≈         -∞∞≈            =≈≈÷÷+≠-                                ÷÷                        π
                                                                     ++∞-∞        =√∞×          ∞∞∞               ≈    ≈                             ÷                            ÷
                          +++++++++++++++++          +++++π             +++++    +∞√≈∞    +++++++++∞∞            -=×--×=×---------÷              ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷            +++++++++++++++++
                        ++++++++++++++++++++++       +++++              +++++    -√∞×     +++++++++ ∞=           -√√√∞√√√∞∞∞∞∞∞∞√∞∞≠×--        ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷        ++++++++++++++++++++++
                       ++++++++++++++++++++++++      +++++              +++++    -√≈+    +++++++++++ ≈           -√√√∞=----------÷≈∞√√∞-      ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷      ++++++++++++++++++++++++
                      ++++++             ++++++      +++++              +++++    ×√÷    ≈+++++ +++++∞            -√√√=            ∞≈√√√∞-     ÷÷÷÷÷              ÷÷÷÷÷     ++++++             ++++++
                      ++++++              +++++      +++++              +++++   √≠∞-    +++++   +++++            -√√√-             ÷∞√√∞-    ÷÷÷÷÷÷              ÷÷÷÷÷÷    ++++++              +++++
                      ++++++              +++++      +++++              +++++   =∞≈π   ++++++   ++++++           -√√√-             -∞√√√-    ÷÷÷÷÷÷                        ++++++
                      ++++++              +++++      +++++              +++++   +∞≈    +++++     +++++           -√√√-             -∞√√√-    ÷÷÷÷÷÷                        ++++++
                      ++++++              +++++      +++++              +++++   +--+  ++++++     ++++++          -√√√=             ÷√√√∞-    ÷÷÷÷÷÷                        ++++++
                      ++++++              +++++      +++++              +++++ +    + ++++++       ++++++         -√√√∞=-----------=∞√√∞-     ÷÷÷÷÷÷                        ++++++
                      ++++++              +++++      +++++              +++++-      ∞+++++         +++++         -√√√√√√√√√√√√√√√√√∞∞=-      ÷÷÷÷÷÷                        ++++++
                      ++++++              +++++      +++++              +++++-      +++++++++++++++++++++        -√√√∞÷----÷≈∞√√√√∞÷-        ÷÷÷÷÷÷                        ++++++
                      ++++++              +++++      +++++              +++++  +++-++++++++++++++++++++++π       -√√√=      ÷÷∞√√√∞          ÷÷÷÷÷÷                        ++++++
                      ++++++              +++++      +++++              +++++      +++++++++++++++++++++++       -√√√-        -∞√√∞×         ÷÷÷÷÷÷                        ++++++
                      ++++++              +++++      +++++              +++++     ++++++             ++++++      -√√√-         -=∞√∞≈-       ÷÷÷÷÷÷              ÷÷÷÷÷÷    ++++++              +++++
                      ++++++             ++++++      ++++++            ++++++     +++++               +++++      -√√√-           -∞√√∞-       ÷÷÷÷÷÷            ÷÷÷÷÷÷     ++++++             ++++++
                       ++++++++++++++++++++++++       +++++++++++++++++++++++    ++++++               ++++++     -√√√-            -≠∞√∞÷-     ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷      ++++++++++++++++++++++++
                        ++++++++++++++++++++++         +++++++++++++++++++++    ++++++                 ++++++    -∞∞∞-              -≈∞∞≈-     ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷        ++++++++++++++++++++++
                           +++++++++++++++++              +++++++++++++++       +++++                   +++++    -===-               -===--       ×÷÷÷÷÷÷÷÷÷÷÷÷÷÷-              ++++++++++++++++
                                       ++++++
                                        ++++++`;

    const logoLines = finalLogo.split('\n');
    const TOTAL_LINES = logoLines.length;
    const TOTAL_WIDTH = Math.max(...logoLines.map(l => l.length));

    const paddedLogoLines = logoLines.map(line => line.padEnd(TOTAL_WIDTH, ' '));

    const Y_AXIS_WIDTH = 8;
    const X_AXIS_HEIGHT = 2;
    const CHART_HEIGHT = TOTAL_LINES - X_AXIS_HEIGHT;
    const CHART_WIDTH = TOTAL_WIDTH - Y_AXIS_WIDTH;

    const PRICE_HIGH = 425;
    const PRICE_LOW = 320;
    const PRICE_RANGE = PRICE_HIGH - PRICE_LOW;

    const candles = [
        { col: 15, wickTop: 35, bodyTop: 38, bodyBottom: 46, wickBottom: 48, bullish: true },
        { col: 26, wickTop: 30, bodyTop: 33, bodyBottom: 42, wickBottom: 45, bullish: true },
        { col: 37, wickTop: 25, bodyTop: 28, bodyBottom: 38, wickBottom: 42, bullish: true },
        { col: 48, wickTop: 20, bodyTop: 23, bodyBottom: 32, wickBottom: 36, bullish: true },
        { col: 59, wickTop: 14, bodyTop: 17, bodyBottom: 26, wickBottom: 30, bullish: true },
        { col: 70, wickTop: 10, bodyTop: 13, bodyBottom: 22, wickBottom: 26, bullish: true },
        { col: 81, wickTop: 6, bodyTop: 9, bodyBottom: 18, wickBottom: 22, bullish: true },
        { col: 92, wickTop: 2, bodyTop: 5, bodyBottom: 14, wickBottom: 18, bullish: true },
        { col: 103, wickTop: 8, bodyTop: 11, bodyBottom: 20, wickBottom: 24, bullish: false },
        { col: 114, wickTop: 14, bodyTop: 17, bodyBottom: 26, wickBottom: 30, bullish: false },
        { col: 125, wickTop: 10, bodyTop: 13, bodyBottom: 22, wickBottom: 26, bullish: false },
        { col: 136, wickTop: 4, bodyTop: 7, bodyBottom: 16, wickBottom: 20, bullish: true },
        { col: 147, wickTop: 0, bodyTop: 3, bodyBottom: 12, wickBottom: 16, bullish: true },
        { col: 158, wickTop: 6, bodyTop: 9, bodyBottom: 16, wickBottom: 20, bullish: false },
        { col: 169, wickTop: 0, bodyTop: 3, bodyBottom: 10, wickBottom: 14, bullish: true },
        { col: 180, wickTop: 0, bodyTop: 2, bodyBottom: 8, wickBottom: 12, bullish: true },
    ];

    const timeLabels = ['9:30', '9:35', '9:40', '9:45', '9:50', '9:55', '10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30', '10:35', '10:40', '10:45'];

    const LOGO_BASE_WIDTH = 1100;
    const LOGO_BASE_HEIGHT = 400;

    useEffect(() => {
        const updateScale = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.parentElement?.clientWidth || window.innerWidth;
                const newScale = Math.min(1, containerWidth / LOGO_BASE_WIDTH);
                setScale(newScale);
                if (!isReady) setIsReady(true);
            }
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, [isReady]);

    const buildChartColored = (revealedCandles) => {
        const lines = [];

        for (let row = 0; row < CHART_HEIGHT; row++) {
            const segments = [];
            let lineLength = 0;

            if (row % 10 === 0) {
                const price = Math.round(PRICE_HIGH - (row / CHART_HEIGHT) * PRICE_RANGE);
                const label = `$${price} ┤`.padStart(8, ' ');
                segments.push({ text: label, color: 'green' });
                lineLength += 8;
            } else {
                segments.push({ text: '       ┤', color: 'green' });
                lineLength += 8;
            }

            let currentText = '';
            let currentColor = 'green';

            for (let col = 0; col < CHART_WIDTH; col++) {
                let char = ' ';
                let charColor = 'green';

                for (let c = 0; c < Math.min(revealedCandles, candles.length); c++) {
                    const candle = candles[c];
                    const candleCol = candle.col - Y_AXIS_WIDTH;

                    if (col === candleCol && row >= candle.wickTop && row <= candle.wickBottom) {
                        charColor = candle.bullish ? 'green' : 'red';
                        if (row >= candle.bodyTop && row <= candle.bodyBottom) {
                            char = '█';
                        } else {
                            char = '│';
                        }
                        break;
                    }
                }

                if (charColor === currentColor) {
                    currentText += char;
                } else {
                    if (currentText) {
                        segments.push({ text: currentText, color: currentColor });
                        lineLength += currentText.length;
                    }
                    currentText = char;
                    currentColor = charColor;
                }
            }
            if (currentText) {
                segments.push({ text: currentText, color: currentColor });
                lineLength += currentText.length;
            }

            if (lineLength < TOTAL_WIDTH) {
                segments.push({ text: ' '.repeat(TOTAL_WIDTH - lineLength), color: 'green' });
            }

            lines.push(segments);
        }

        let xAxisText = '     └' + '─'.repeat(CHART_WIDTH - 1);
        xAxisText = xAxisText.padEnd(TOTAL_WIDTH, ' ');
        lines.push([{ text: xAxisText, color: 'green' }]);

        let timeLine = '      ';
        for (let i = 0; i < timeLabels.length && timeLine.length < TOTAL_WIDTH - 5; i++) {
            timeLine += timeLabels[i].padEnd(11, ' ');
        }
        timeLine = timeLine.padEnd(TOTAL_WIDTH, ' ').substring(0, TOTAL_WIDTH);
        lines.push([{ text: timeLine, color: 'green' }]);

        return lines;
    };

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        const totalCandles = candles.length;
        const drawingFrames = isMobile ? 24 : 48;
        const holdFrames = isMobile ? 8 : 15;
        const transitionFrames = isMobile ? 10 : 45;
        const frameInterval = isMobile ? 50 : 33;
        let currentFrame = 0;
        let cachedColoredChart = null;
        let cachedChartChars = null;
        const glitchChars = '█▓▒░▀▄│─┤├┼╬═║╔╗╚╝√∞÷×≈≠∂∑∫';

        const animate = () => {
            const totalDrawing = drawingFrames;
            const totalHold = totalDrawing + holdFrames;
            const totalTransition = totalHold + transitionFrames;

            if (currentFrame <= totalTransition) {
                if (currentFrame < totalDrawing) {
                    const candlesToShow = Math.floor((currentFrame / totalDrawing) * totalCandles) + 1;
                    setDisplayContent({ type: 'colored', data: buildChartColored(Math.min(candlesToShow, totalCandles)) });
                } else if (currentFrame < totalHold) {
                    if (!cachedColoredChart) {
                        cachedColoredChart = buildChartColored(totalCandles);
                        cachedChartChars = cachedColoredChart.map(line => {
                            const chars = [];
                            for (const seg of line) {
                                for (const ch of seg.text) {
                                    chars.push({ char: ch, color: seg.color });
                                }
                            }
                            while (chars.length < TOTAL_WIDTH) {
                                chars.push({ char: ' ', color: 'green' });
                            }
                            return chars;
                        });
                    }
                    setDisplayContent({ type: 'colored', data: cachedColoredChart });
                } else {
                    const transitionProgress = (currentFrame - totalHold) / transitionFrames;
                    const eased = transitionProgress < 0.5
                        ? 2 * transitionProgress * transitionProgress
                        : 1 - Math.pow(-2 * transitionProgress + 2, 2) / 2;

                    const resultLines = [];

                    for (let i = 0; i < TOTAL_LINES; i++) {
                        const chartChars = cachedChartChars[i];
                        const logoLine = paddedLogoLines[i];

                        const lineSegments = [];
                        let currentText = '';
                        let currentColor = 'purple';

                        for (let j = 0; j < TOTAL_WIDTH; j++) {
                            const chartChar = chartChars[j];
                            const logoChar = logoLine[j] || ' ';

                            const positionFactor = (i / TOTAL_LINES + j / TOTAL_WIDTH) / 2;
                            const localProgress = Math.max(0, Math.min(1, (eased - positionFactor * 0.6) / 0.4));

                            let finalChar;
                            let finalColor;

                            if (localProgress < 0.01) {
                                finalChar = chartChar.char;
                                finalColor = chartChar.color;
                            } else if (localProgress < 0.5) {
                                const rand = Math.random();
                                if (rand < 0.2) {
                                    finalChar = chartChar.char;
                                    finalColor = chartChar.color;
                                } else if (rand < 0.5) {
                                    finalChar = logoChar;
                                    finalColor = 'purple';
                                } else {
                                    finalChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
                                    finalColor = 'purple';
                                }
                            } else {
                                finalChar = logoChar;
                                finalColor = 'purple';
                            }

                            if (finalColor === currentColor) {
                                currentText += finalChar;
                            } else {
                                if (currentText) lineSegments.push({ text: currentText, color: currentColor });
                                currentText = finalChar;
                                currentColor = finalColor;
                            }
                        }
                        if (currentText) lineSegments.push({ text: currentText, color: currentColor });
                        resultLines.push(lineSegments);
                    }

                    setDisplayContent({ type: 'colored', data: resultLines });
                }

                currentFrame++;
                animationRef.current = setTimeout(animate, frameInterval);
            } else {
                setDisplayContent({ type: 'text', data: finalLogo });
            }
        };

        const startTimer = setTimeout(animate, 300);

        return () => {
            clearTimeout(startTimer);
            if (animationRef.current) {
                clearTimeout(animationRef.current);
            }
        };
    }, []);

    const renderContent = () => {
        if (displayContent.type === 'colored') {
            return (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {displayContent.data.map((line, i) => (
                        <div key={i} style={{ whiteSpace: 'pre' }}>
                            {line.map((segment, j) => {
                                const colorMap = {
                                    red: { color: '#ff4757', shadow: '0 0 5px #ff4757' },
                                    green: { color: '#00ff88', shadow: '0 0 3px #00ff88' },
                                    purple: { color: '#8957e5', shadow: '0 0 3px #8957e5' }
                                };
                                const colors = colorMap[segment.color] || colorMap.green;
                                return (
                                    <span
                                        key={j}
                                        style={{
                                            color: colors.color,
                                            textShadow: colors.shadow
                                        }}
                                    >
                                        {segment.text}
                                    </span>
                                );
                            })}
                        </div>
                    ))}
                </div>
            );
        }
        return displayContent.data;
    };

    const scaledHeight = LOGO_BASE_HEIGHT * scale;

    return (
        <div
            ref={containerRef}
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                height: `${scaledHeight}px`,
                overflow: 'hidden',
            }}
        >
            <pre style={{
                color: '#8957e5',
                fontWeight: 'bold',
                lineHeight: '1',
                fontSize: '7px',
                whiteSpace: 'pre',
                overflow: 'visible',
                transform: `scale(${scale})`,
                transformOrigin: 'top center',
                textShadow: '0 0 3px #8957e5',
                fontFamily: "'Courier New', monospace",
                opacity: isReady ? 1 : 0,
                transition: 'opacity 0.2s ease-in',
                willChange: 'contents',
            }}>
                {renderContent()}
            </pre>
        </div>
    );
};

export default AsciiLogoAnimation;
