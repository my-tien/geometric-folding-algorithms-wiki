# Applications
Created Samstag 27 Juli 2024

Robotics
--------
An articulated robotic manipulator can be viewed as a chain of links. E.g. the exact position or [configuration](./Linkage/Linkage_Configuration.md) of a robot arm with four joints may be specified as a point in a 4D [configuration space](./Linkage/Linkage_Configuration.md#configuration-space).

The number of axes along which each joint can rotate are the degrees of freedom of the robot arm. One challenge in Robotics is the complexity of the configuration-space approach for robots with a large number of degrees of freedom.

Another concern of robot designers is i*nverse kinematics* or "reachability": Given a desired tool position, compute joint angles which achieve that position.

