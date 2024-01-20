# Describe the difference between <script>, <script async> and <script defer>.

The differences btween the 3 refer to execution priority.

Script: executes immediately as it is parsed by the browser. Blocks further rendering until finished.
Script async: Executes in parallel with html parsing. Does not block HTML. Executes once it is ready.
Script defer: The script is fetched in parallel with HTML but does not execute until the page has finished rendering.