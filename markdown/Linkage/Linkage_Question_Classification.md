# Linkage Question Classification
Created Samstag 27 Juli 2024

Questions asked about linkages can be classified in the following:


* **Geometric issue**
	* *reconfiguration*: given an initial [configuration](./Linkage_Configuration.md) ![](./Linkage_Question_Classification/equation001.png) and a final configuration ![](./Linkage_Question_Classification/equation002.png), can the linkage be continuously reconfigured from ![](./Linkage_Question_Classification/equation001.png) to ![](./Linkage_Question_Classification/equation002.png), keeping all links rigid (i.e. their original length), staying within the ambient space (e.g. a 2D plane), without violating any imposed intersection conditions? If yes, the linkage is in a *legal* configuration.
	* *reachability*: Whether a particular point (usually a link endpoint) of a linkage can reach, i.e. coincide with, a given point of the ambient space. Here the configuration achieving the reaching is considered irrelevant.
	* *locking*: Are every two legal configurations of a linkage connected in the configuration space or might a linkage be *locked* or "stuck" in one component of the space and thereby isolated from configurations in another component?
* **Answer desired**
	* *Decision problems* seek yes/no answers, e.g. »can the arm reach this point?«
	* *Path planning problems* require more in the case of »yes«: an explicit path through the configuration space that achieves the reconfiguration.
* **Complexity bound sought**
	* For path planning problems, the combinatorial complexity of the path may be of interest, e.g. the number of constant-degree piecewise-algebraic arcs composing the path
	* In general the algorithmic computational complexity is the primary measure, e.g. *O*(*n^p^), Ω*(*n^q^*), NP-complete, NP-hard, PSPACE-complete, PSPACE-hard, etc.


