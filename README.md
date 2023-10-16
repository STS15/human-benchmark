# human-benchmark

After watching CodeBullet's video on automating the typing test, I thought I'd give it a try in JavaScript. He showed some code in his video indicating he used Python, Selenium, and pyautogui. These are all fast packages, but he mentioned facing issues with the time it took to loop through the span elements. I chose a different approach using a language I'm more comfortable with and employed Playwright instead of Selenium. I anchored off the parent element and combined the innerText of the children into a single string. Playing back that string with keyup/keydown events, I achieved an average score of approximately 25,797.2 words per minute.

Test run outcomes:
Run 1: 26471 wpm
Run 2: 25133 wpm
Run 3: 26264 wpm
Run 4: 25357 wpm
Run 5: 25184 wpm
Run 6: 25448 wpm
Run 7: 24831 wpm
Run 8: 26080 wpm
Run 9: 24960 wpm
Run 10: 27344 wpm

Code Bullets Video: https://www.youtube.com/watch?v=o3CQZ4JmTU8
