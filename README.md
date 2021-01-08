# Temp Converter Lab

## Description
You will create a tool to convert temperatures from one scale to another. After completing each bullet point in the requirements, you should commit and push your changes.

## Setup
1. Fork this repository
2. Clone your repository to your local machine `git clone`
3. Open the project in your text editor
4. Create HTML, CSS, and JS files in your root
 
## Requirements
* The user can enter a value into the textbox
* The user can click the calculate button
* The system will convert the Fahrenheit value into Celsius
* The user can view the Celsius value 

## Mock Up
![mockupPart1](mockup.png)

## Steps
1.<h1> Temperature Converter</h1>Structure the webpage (HTML)
2<p> type the value in the Fahrenheit field to convert the value to Celsius</p>
<p>
  <label>Fahrenheit</label>
  <input id= "inputFahreheit" type="number"
  placeholder="Fahrenheit"
  oninput="temperatureConverter (this.value)">
      onchange= "temperatureConverter(this.value)"></p>
      <p>Celcius: <span id="output Celcius">/span></p>
      
      <script>
      Function temperatureConverter(va1Num){
          va1Num=parseFloat(Va1Num);
          document.getElementById("outputCelcius").innerHTML=(va1Num-32)/1.8'
      }
      </script>
      
      </body>
      </html>
      
      this.value)>. Style the webpage (CSS)
3. Implement the Logic (JavaScript)
4. Go the extra mile!


## Submission
Create a pull request from your project GitHub page

**Happy Hacking!**
