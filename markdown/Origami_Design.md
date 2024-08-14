# Origami Design
Created Donnerstag 25 Juli 2024

Given a 3D shape (an origami final folded state), find a crease pattern and sequence of folds to create the origami (if possible) from a given square piece of paper.

In general, an unsolved problem. In practice, origami shapes are a subset of all possible 3D shapes that are constructiblein two steps:


1. Creating an origami *base*
2. Creasing and adjusting the remaining paper to achieve a desired design


An origami base can be seen as a metric tree, i.e. a tree with lengths assigned to the edges.

Robert Lang developed an algorithm to construct a crease pattern to achieve any given "uniaxial base", the most useful type of origami base. It is implemented in the TreeMaker software. It is not yet formally proven that TreeMaker crease patterns lead to non-self-intersecting folding states.

