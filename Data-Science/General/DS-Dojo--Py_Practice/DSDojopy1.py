
# coding: utf-8

# Data Science Dojo <br/>
# Copyright(c) 2016 - 2022<br/>
# 
# ---
# 

# # Data Visualization For Insights And Feature Analysis

# **Objective:** Exploring and visualizing data using pandas, matplotlib and seaborn on three publicly available datasets: iris, diamond and titanic dataset.<br/>
# 
# <b>Note</b>: The packages mentioned below are already installed on the learning portal to run this exercise.
# If you would like to run this code on your local machine, please run the following install commands in your command line tool. <br/>
# If you would like to run this code on your local Jupyter Notebook, you can also run the install commands in a new cell of jupyter notebook instead of command line using this convention `!pip install package name`.<br/>
# 
# * Please install pandas package: `pip install pandas`
# * Please install matplotlib package: `pip install matplotlib`
# * Please install seaborn package: `pip install seaborn`<br/>

# ## Commonly used visualization libraries in Python
# 
# ### matplotlib
# - A `Figure` is a blank canvas where your visualizations are plotted
# - A `plot` is a visualization of a certain sample of data (a dataset). Plots can be anything from straight lines to complex visualizations like density and box plots
# - Each plot has its `axes` - which is where your data or visualizations are plotted. In most cases, the axes are inferred from the data and do not need to be specified
# 
# - `matplotlib` supports many different kinds of plots. A gallery of possible visualizations can be found __[here](https://matplotlib.org/stable/gallery/index.html)__. In this tutorial, we will be focusing on a select few commonly used visualizations.
# 
# ### Seaborn
# 
# - `Seaborn` is another visualization library built on top of `matplotlib`. It follows much of the same principles and syntax but offers a lot more in terms of functionality
# 
# - A gallery of possible visualizations possible with `seaborn` can be found __[here](https://seaborn.pydata.org/examples/index.html)__. 

# ## Plotting visualizations with matplotlib

# ### Creating a simple lineplot in matplotlib

# In[1]:


#Importing the matplotlib library
import matplotlib.pyplot as plt
get_ipython().run_line_magic('matplotlib', 'inline')


# In[2]:


#Building a plot in matplotlib can be as simple as calling the plot() function on a dataset
plt.plot([1,2,3,4], [3,6,9,12])
plt.show()


# In[3]:


#We can also pass the data as variables to the plot() function
x, y = [1,2,3,4], [3,7,9,9]

plt.plot(x, y)
plt.show()


# ### Improving your visualization
# You can further improve your visualization by adding markers, labels, adjustin colors, etc.

# In[4]:


#Adding markers to data points to emphasize them further
x, y = [1,2,3,4], [3,7,9,9]

plt.plot(x, y,marker='.')
plt.show()


# In[5]:


#Changing the line style
x, y = [1,2,3,4], [3,7,9,9]

plt.plot(x, y,marker='.',linestyle = 'dotted')
plt.show()


# In[6]:


#Adding labels to the visualization
x, y = [1,2,3,4], [3,7,9,9]

plt.plot(x, y,marker='.',linestyle = 'dotted')

plt.xlabel("X")
plt.ylabel("Y")

plt.show()


# In[9]:


#Adding a title to the figure
x, y = [1,2,3,4], [3,7,9,9]

plt.plot(x, y,marker='.',linestyle = 'dotted')

plt.xlabel("X")
plt.ylabel("Y")

plt.title("Learning Matplotlib")

plt.show()


# In[7]:


#Drawing two subplots in one figure
#Plot 1:
plt.subplot(1, 2, 1)
plt.plot([1,2,3,4],[5,6,8,9])
plt.title("Plot 1")

#Plot 2:
plt.subplot(1, 2, 2)
plt.plot([4,6,8,10],[4,5,7,2])
plt.title("Plot 2")

plt.show()


# Now that we understand matplotlib's syntax, let's look at some useful visualizations we can build using some publicly available datasets.

# ## The iris dataset
# 
# ### Dataset description
# **Iris:** This iris data set gives the measurements in centimeters of the variables sepal length and width and petal length and width, respectively, for 50 flowers from each of 3 species of iris. The species are Iris setosa, versicolor, and virginica. __[Click here to read more](https://archive.ics.uci.edu/ml/datasets/iris)__.

# In[8]:


#Import the required package
import pandas as pd
#Read and preview the data
iris = pd.read_csv('Datasets/Iris_Data.csv')
#Print the dataset
print(iris.head())


# In[12]:


print("Shape of dataset: ",iris.shape)
print("Size of dataset: ",iris.size)
print("Dimension of array: ",iris.ndim)
print(iris.describe())
print("Data types:\n",iris.dtypes)


# ### Box plots
# 
# A boxplot is a method for graphically depicting groups of numerical data through their quartiles. Box plots may also have lines extending from the boxes (whiskers) indicating variability outside the upper and lower quartiles, hence the terms box-and-whisker plot and box-and-whisker diagram. Outliers may be plotted as individual points.

# In[16]:


#Viewing the column consisting of Sepal Length
iris['Sepal.Length']


# In[17]:


#A simple boxplot in matplotlib
#Setting the size of the figure
plt.figure(figsize=(12,8)) 
#Passing the entire iris dataset and specificing x to be column Sepal.Length from that dataframe
plt.boxplot(x='Sepal.Length', data=iris) 
#Adding axis labels and ticks
plt.xlabel("All Species", fontsize=16)
plt.ylabel("Sepal Length", fontsize=16)
plt.xticks(fontsize=14)
plt.yticks(fontsize=14)
#Showing the plot
plt.show()


# In[15]:


#Seaborn allows us to segment Sepal Length based on Species so that we can have a better understanding of our data
import seaborn as sns
#Setting the size of the figure
plt.figure(figsize=(12,8))
#Passing the entire iris dataset and specificing x to be column Sepal.Length from that dataframe
sns.boxplot(x='Species', y='Sepal.Length', data=iris)
#Adding axis labels and ticks
plt.xlabel("Species", fontsize=16)
plt.ylabel("Sepal Length", fontsize=16)
plt.xticks(fontsize=14)
plt.yticks(fontsize=14)
#Showing the plot
plt.show()


# ### Pie charts
# Pie charts summarize qualitative/categorical variables. What's cool about Pandas is that some basic charts can be made directly using Pandas without having to use Seaborn or Matplotlib

# In[9]:


#Plotting a pie chart with pandas
iris['Species'].value_counts().plot(kind='pie')
plt.show()


# ### Changing the orientation
# Let's fix the overlapping of labels by changing the starting position of the pie chart and rotating it

# In[ ]:


#Passing a paramaeter startangle which defines the starting point of the chart
iris['Species'].value_counts().plot(kind='pie',startangle=90)
plt.show()


# ### Plotting using matplotlib library
# We could also plot the same graph using the method below. This is another way to achieve the same plot as above

# In[ ]:


#Viewing the count of each species
iris['Species'].value_counts()


# In[10]:


spcounts=iris['Species'].value_counts()
plt.pie(spcounts,labels=spcounts.index)
plt.title("Species")
plt.show() 


# ### Customizing the pie chart
# You can further play around to customize your pie chart. Let's look at some of these customizations

# In[ ]:


spcounts=iris['Species'].value_counts()
#Setting the colours and printing the percentage of each category
plt.pie(spcounts,labels=spcounts.index, colors=['red','green','hotpink'],autopct='%1.0f%%')
plt.title("Species")
plt.show() 


# You can also make wedges of your pie chart pop out to place emphasis on them

# In[ ]:


spcounts=iris['Species'].value_counts()
#Explode causes virginica and green to both explode based on the values we assign. The greater the value, the greater the distance from he center of the pie chart
plt.pie(spcounts,labels=spcounts.index, colors=['red','green','hotpink'],explode = [0.1, 0.6, 0], shadow = True,autopct='%1.0f%%')
plt.title("Species")
plt.show() 


# Finally, we can also add a legend to our visualization

# In[ ]:


spcounts=iris['Species'].value_counts()
plt.pie(spcounts,labels=spcounts.index, colors=['red','green','hotpink'],explode = [0.1, 0.6, 0], shadow = True,autopct='%1.0f%%')
plt.title("Species")
plt.legend(title = "Species")
plt.show() 


# ### Scatter plots
# Scatter plot is a simple diagram where each point corresponds to one value in the dataset. It is useful to depict correlation between numeric variables.

# In[11]:


#Building a scatter plot in Seaborn
plt.figure(figsize=(12,8))
sns.scatterplot(x=iris['Sepal.Length'], y=iris['Sepal.Width'])
plt.xlabel("Sepal Length", fontsize=16)
plt.ylabel("Sepal Width", fontsize=16)
plt.xticks(fontsize=14)
plt.yticks(fontsize=14)
plt.show()


# ## The diamonds dataset
# 
# ### Dataset description
# **Diamonds** dataset is a dataset containing the prices and other attributes of almost 54,000 diamonds. __[Click here to read more](https://www.tensorflow.org/datasets/catalog/diamonds)__.

# In[ ]:


#Read and preview the data
diamonds = pd.read_csv('Datasets/diamonds.csv')
print(diamonds.head())


# In[12]:


print("Shape of dataset: ",diamonds.shape)
print("Size of dataset: ",diamonds.size)
print("Dimension of array: ",diamonds.ndim)
print(diamonds.describe())
print("Data types:\n",diamonds.dtypes)


# ### Scatter plot
# 
# A scatter plot on the diamonds dataset. Plotting carat against price.
# Can you find any insights from this visual?

# In[ ]:


#Seaborn scatter plot
plt.figure(figsize=(15,8))
#Note how we are using a different syntax here. 
#Instead of passing the columns as pandas series from dataset, we pass the entire dataset and then specify column names
sns.scatterplot(data=diamonds, x='carat', y='price')
plt.xlabel("Carat", fontsize=16)
plt.ylabel("Price", fontsize=16)
plt.xticks(fontsize=14)
plt.yticks(fontsize=14)
plt.show()


# ### Plotting 3 dimensions
# 
# Seaborn allows us to introduce a 3rd variable (seaborn's `hue` argument controls the color of each data point) for more in-depth analysis. In this case, the color of each data point represents the color category of the diamond. Can you deduce something else from this graph that you couldn't from the previous one?
# 
# Try to answer the following questions;
# 
# - Which color grade is worth the least?
# - Which color grade is worth the most?
# 
# 
# Answer:  __[Check out this color grading chart to see if you were right!](https://i.pinimg.com/originals/8c/9d/b6/8c9db6dfa3537ba550a503672bd22038.jpg)__

# In[13]:


#Segmenting based on color of the diamond
plt.figure(figsize=(15,8))
sns.scatterplot(data=diamonds, x='carat', y='price', hue='color')
plt.xlabel("Carat", fontsize=16)
plt.ylabel("Price", fontsize=16)
plt.xticks(fontsize=14)
plt.yticks(fontsize=14)
plt.show()


# What if we segment based on clarity instead of color? Can we deduce something of value from this?
# 
# Try to answer the following questions;
# 
# - Which clarity grade is worth the least?
# - Which clarity grade is worth the most?
# 
# 
# Answer:  __[Check out this color grading chart to see if you were right!](https://i.pinimg.com/originals/8c/9d/b6/8c9db6dfa3537ba550a503672bd22038.jpg)__

# In[ ]:


#Segmenting based on clarity of the diamond
plt.figure(figsize=(15,8))
sns.scatterplot(data=diamonds, x='carat', y='price', hue='clarity')
plt.xlabel("Carat", fontsize=16)
plt.ylabel("Price", fontsize=16)
plt.xticks(fontsize=14)
plt.yticks(fontsize=14)
plt.show()


# ### Faceting
# 
# Faceting is the act of breaking data variables up across multiple subplots, and combining those subplots into a single figure. So instead of one scatter plot, we might have, say, seven, arranged together in a grid.
# 
# In the figure below, each scatter plot is shows the carat vs price plot for a specific color category.

# In[ ]:


#Separating segments using facets. Each facet coresponds to a colour of diamond
g = sns.FacetGrid(diamonds, col='color', col_wrap=2, height=5)
g.map(sns.scatterplot, 'carat', 'price')
plt.show()


# What if we add the clarity category as the `hue` variable? Does this help our analysis?

# In[ ]:


#Separating segments using facets
#When using a "Hue", it's best to use it within the FacetGrid
#We set the hue to clarity, so differerent colours corresponds to different level of clarity
g = sns.FacetGrid(diamonds, col='color', hue='clarity', col_wrap=2, height=5, sharex=True, sharey=True)
g.map(sns.scatterplot, 'carat', 'price')

#When using Hue in FacetGrid, add this line to show the legend
g.add_legend()
plt.show()


# ### Further segmentation
# What could we discover if we added more dimensions or variables and their relationships?

# In[ ]:


g = sns.FacetGrid(diamonds, col='color', row='cut', hue='clarity', height=5, aspect=1)
g.map(sns.scatterplot, 'carat', 'price')
g.add_legend()
plt.show()


# This visual has a lot of information on it, but most of it is not accessible to the user because of the way we have structured the plot. Remember to balance the information you would like to present, and the viewer's experience

# ### Seaborn density plot
# Visualizes the density of observations that fall under a certain range of values. It is used to understand the distribution of a variable in a dataset
# 

# In[ ]:


#Initialize a Figure
plt.figure(figsize=(15,8))

#Plot a density plot on the Figure. 
#Notice we haven't added an axes to the Figure. matplotlib infers axes limits automatically from the data
ax = sns.kdeplot(diamonds['carat'])

#Setting the label for the x-axis. If an axis label is not specified, matplotlib automatically infers it from the variable name
ax.set_xlabel('Caret',fontsize = 10)
ax.tick_params(labelsize = 10)

#If this is not specified, the figure will not have a title
ax.set_title('Density Plot')
plt.show()


# ## The Titanic dataset
# 
# ### Dataset description
# **Titanic** dataset provides information on the fate of passengers on the fatal maiden voyage of the ocean liner "Titanic", summarized according to economic status (class), sex, age, survival and other variables. __[Click here to read more](https://www.kaggle.com/c/titanic/data)__.

# In[ ]:


#Read and preview the data
titanic = pd.read_csv("Datasets/titanic.csv")
print(titanic.head())


# ### Check data types

# In[ ]:


print(titanic.dtypes)


# ### Casting Survived as factor
# Treat Survived [0,1] as a categorical variable with two categories: dead ('0') and survived ('1').

# In[ ]:


#Casting Survived as factor/category levels
titanic['Survived'] = pd.Categorical(titanic.Survived)


# ### Renaming factor levels
# Create more meaningful categories or labels for Survived and Embarked.

# In[ ]:


#Seeing all the unique categories in the column Survived
print(titanic['Survived'].unique())
#Renaming categories '0' to dead and '1' to survive
titanic['Survived'] = titanic['Survived'].cat.rename_categories(['Dead','Survived'])
#Filling NaN values in Embarked columnn with Unkown
titanic['Embarked'] = titanic.Embarked.fillna('Unknown')
#Casting Embarked column as category levels
titanic['Embarked'] = pd.Categorical(titanic.Embarked)
#Seeing all the unique categories in the column Embarked
print(titanic['Embarked'].unique())
#Renaming categories 'S' to Southampton, 'C' to Cherbourg, 'Q' to Queenstown, 'Unknown' to Unknown
titanic['Embarked'] = titanic['Embarked'].cat.rename_categories(['Southampton', 'Cherbourg', 'Queenstown', 'Unknown'])
print(titanic.dtypes)


# ### Check class distribution
# What are the portions of Survived and Dead people? Are they fairly balanced?

# In[ ]:


#Checking class distribution using pie chart
plt.figure(figsize=(12,8))
titanic['Survived'].value_counts().plot(kind='pie')
plt.show()


# Was there a significant difference between the population sizes of males and females aboard the Titanic?
# 

# In[ ]:


plt.figure(figsize=(8,8))
sns.countplot(x="Sex" , data=titanic)
plt.show()


# ### Is "Sex" a good predictor?
# 
# Let's plot Dead versus Survived segmented by "Sex"

# In[ ]:


titanic_plot = titanic.groupby(['Survived', 'Sex']).size().reset_index().pivot(columns='Survived', index='Sex', values=0)
print (titanic_plot)


# In[ ]:


titanic_plot.plot(kind='bar', stacked=True)
plt.ylabel('Count')
plt.show()


#  Do we see a correlation between Sex and Survived?

# ### Faceting by Sex
# 
# A seaborn `catplot()` combines `countplot()` and `Facetgrid()` functions. We can use a `catplot()` to facet our barplot by Sex.

# In[ ]:


sns.catplot(x="Survived", col="Sex", data=titanic, kind="count", height=5, aspect=.7)
plt.show()


# ### Faceting by Embarked
# `catplot()` facteted by the column Embarked stitches together plots for Cherbourg, Southampton, Queenstown, and Unknown (missing value).

# In[ ]:


#Faceting by column Embarked
sns.catplot(data=titanic, x="Survived", col="Embarked", hue='Sex', kind="count", col_wrap=2)
plt.show()


# ### Faceting by more than 1 variable
# `countplot()` can be used to facet by multiple variables simultaneously. This is a simultaneous facet by Sex and Embarked; it allows us to look for patterns across Sex and Embarked. What can we deduce from these graphs?

# In[ ]:


#Faceting by more than 1 variable
sns.catplot(data=titanic, x="Survived", col="Sex", row='Embarked', kind="count")
plt.show()


# Can you tell why the Embarked = Unknown column is there? And why is it empty for males?

# In[ ]:


titanic[titanic['Embarked'] == 'Unknown']


# ### Is Age a good predictor?
# What are the age ranges and do we see a big difference in age for survivors versus non survivors?

# In[ ]:


print(titanic['Age'].describe())
titanic_dead = titanic['Survived']=='Dead'
print(titanic['Survived'].head())
print(titanic_dead.head())
print(titanic.where(titanic_dead, inplace=False)['Age'].describe())
titanic_survived = titanic['Survived']=='Survived'
print(titanic.where(titanic_survived, inplace=False)['Age'].describe())


# In[ ]:


plt.figure(figsize=(12,8))
ax = sns.kdeplot(data=titanic, x="Age")
ax.set_xlabel('Age',fontsize = 15)
ax.set_ylabel('Density',fontsize = 15)
ax.set_title("Distribution of Passenger's Ages on Titanic",fontsize = 20)
plt.show()


# ### Age distribution by gender
# Do we see anything interesting for age between genders?
# 
# Question: Would a `countplot()` (barchat) be the best visualization to understand the correlation between the age and gender of the people on board the titanic?

# In[ ]:


plt.figure(figsize=(12,8))
ax = sns.countplot(data=titanic, x="Age", hue='Sex')
ax.set_xlabel('Age',fontsize = 15)
ax.set_ylabel('Count',fontsize = 15)
ax.set_title("Frequency of Passenger's Ages on Titanic",fontsize = 20)
plt.show()


# Would a density plot be better for this task? What can you deduce from the graph below?

# In[ ]:


plt.figure(figsize=(12,8))
ax = sns.kdeplot(data=titanic, x="Age", hue='Sex')
ax.set_xlabel('Age',fontsize = 15)
ax.set_ylabel('Density',fontsize = 15)
ax.set_title("Distribution of Passenger's Ages on Titanic",fontsize = 20)
plt.show()


# ### Age's impact on survivability
# Does Age have an impact on survivability?

# In[ ]:


plt.figure(figsize=(12,8))
sns.boxplot(x='Survived', y='Age', data=titanic)
plt.xlabel("Survived", fontsize=16)
plt.ylabel("Age", fontsize=16)
plt.xticks(fontsize=14)
plt.yticks(fontsize=14)
plt.show()


# ### Further exploring Age on survivability
# What if plotted Age on survivability a different way? Would we see anything interesting?

# In[ ]:


plt.figure(figsize=(12,8))
ax = sns.kdeplot(data=titanic, x="Age", hue='Survived')
ax.set_xlabel('Age',fontsize = 15)
ax.set_ylabel('Density',fontsize = 15)
ax.set_title("Distribution of Passenger's Ages on Titanic",fontsize = 20)
plt.show()


# ### Segmenting Age on survivability by gender and location
# What if we added Sex and Embarked? Would we see anything interesting in these relationships?

# In[ ]:


g = sns.FacetGrid(titanic, col='Sex', row='Embarked', hue='Survived', height=5)
g.map(sns.kdeplot, 'Age')
plt.show()


# **Note:** You might get a warning for Embarked = Unknown | Sex = male visualization, because as previously discussed, there are no datapoints in this category. Hence the variance will be 0

# In[ ]:


#Boxplot of this segmentation
g = sns.FacetGrid(titanic, col='Sex', row='Embarked', height=5)
#It is recommended to pass the "order" parameter when creating multiple boxplots
g.map(sns.boxplot, 'Survived', 'Age', order=['Dead', 'Survived'])
g.add_legend()
plt.show()


# **Reminder:** The visualization for Embarked = Unknown | Sex = male visualization appears empty because there are no datapoints in this category.
