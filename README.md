# human-benchmark

After watching CodeBullet's video on automating the typing test, I was inspired to replicate the experiment using JavaScript. In his video, CodeBullet showcased the use of Python, Selenium, and pyautogui—all of which are highly efficient tools. However, he did encounter challenges, especially with the time it took to loop through the span elements. 

I opted for a different approach:
- Leveraged a programming language I'm well-versed in: **JavaScript**.
- Used **Playwright** as a substitute for Selenium.
- Simplified the process by anchoring to the parent element and merging the innerText of its children into a unified string.
- Played back the consolidated string leveraging keyup/keydown events.

The result? An average typing speed of **25,797.2 words per minute**.

## Test Run Results:

- Run 1: 26,471 wpm
- Run 2: 25,133 wpm
- Run 3: 26,264 wpm
- Run 4: 25,357 wpm
- Run 5: 25,184 wpm
- Run 6: 25,448 wpm
- Run 7: 24,831 wpm
- Run 8: 26,080 wpm
- Run 9: 24,960 wpm
- Run 10: 27,344 wpm

### Reference:
[CodeBullet's Video](https://www.youtube.com/watch?v=o3CQZ4JmTU8)
